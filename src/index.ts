import express, { Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRouter from './routes/authRoutes';
import taskRouter from './routes/taskRoutes';
dotenv.config();

const app: Application = express();
connectDB();

// Middlewares
app.use(express.json());

// Rotas
app.use('/api/auth', authRouter);
app.use('/api/tasks', taskRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));