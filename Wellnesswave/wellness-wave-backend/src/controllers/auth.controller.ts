import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import { User, IUser } from '../models/userModel';

interface RegisterUser {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role = 'user' } = req.body as RegisterUser;

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id as Types.ObjectId)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id as Types.ObjectId)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const generateToken = (id: Types.ObjectId): string => {
  return jwt.sign({ id: id.toString() }, process.env.JWT_SECRET as string, {
    expiresIn: '30d'
  });
};