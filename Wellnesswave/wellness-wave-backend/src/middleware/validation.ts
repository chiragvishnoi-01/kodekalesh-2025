import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateSignup = [
    body('username').isString().notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const validateLogin = [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').exists().withMessage('Password is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];