import express, { Request, Response } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import Task from '../models/Task';


interface AuthRequest extends Request {
    user?: string;
}

const taskRouter = express.Router();

taskRouter.get('/', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const tasks = await Task.find({ user: req.user }).sort({ createdAt: -1 });
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks' });
    }
});

taskRouter.post('/', authMiddleware, async (req: AuthRequest, res: Response) => {
    const { title, description } = req.body;

    try {
        const newTask = new Task({ title, description, user: req.user });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task' });
    }
});

taskRouter.put('/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            {title, description, completed},
            {new: true}
        )
        if (!updatedTask) {
            res.status(404).json({message: 'Task not found'});
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task' });
    }
});

taskRouter.delete('/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({message: 'Error deleting task'});
    }
});


export default taskRouter;