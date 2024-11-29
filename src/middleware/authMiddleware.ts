import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
    user?: string;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'No token provided' });
        return;
      }

      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
        req.user = decoded.id; // Adiciona o ID do usuário ao objeto Request
        next();
      } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
      }
};

export default authMiddleware;