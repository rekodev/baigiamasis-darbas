import User, { IUser } from '../models/user.model';
import { Request, Response } from 'express';

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
