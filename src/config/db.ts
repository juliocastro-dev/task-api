import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI!);

        console.log(`MongoDB connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(`Error connecting to MongoDB: ${(error as Error).message}`);
        process.exit(1);
    }
}

export default connectDB;