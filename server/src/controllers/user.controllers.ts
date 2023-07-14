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

export const postUser = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    if (data) {
      const user = new User(data);

      const savedUser = await user.save();

      res.status(201).json(savedUser);
    } else {
      res.status(404).json({ message: 'Error adding user' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (deletedUser) {
      res.status(204).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User with given ID not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const editUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const editedUser = await User.findByIdAndUpdate(id, data);

    if (editedUser) {
      res.json(editUser);
    } else {
      res.status(404).json({ message: 'User with given ID not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
