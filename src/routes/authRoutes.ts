import express, { Request, Response } from 'express';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';

const router = express.Router();

// User Register
router.post('/register', async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;
  
    try {
      // Verifica se o usuário já existe
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          res.status(400).json({ message: 'Email already in use' });
      }
  
      // Cria novo usuário
      const newUser = new User({ name, email, password });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user' });
    }
});

// User Login
router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({ message: 'Invalid email or password' });
            return;
        }

        const isPasswordValid = await bycrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({ message: 'Invalid email or password' });
            return;
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET!,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ message: 'Error logging in'});
    }
});

export default router;