import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'asha_worker' | 'official';
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['user', 'asha_worker', 'official'], 
    default: 'user' 
  },
  lastLogin: { type: Date }
}, { timestamps: true });

export const User = mongoose.model<IUser>('User', userSchema);