import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = async () => {
  try {
    if (process.env.MONGODB_URI) {
      const connected = await mongoose.connect(process.env.MONGODB_URI);
      if (connected) {
        console.log('Connected to MongoDB');
      }
    }
  } catch (error) {
    throw new Error('Failed to connect to MongoDB');
  }
};

export default dbConnection;
