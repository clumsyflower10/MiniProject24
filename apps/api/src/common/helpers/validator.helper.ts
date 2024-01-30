import { NextFunction, Request, Response } from 'express';
import { object, string } from 'yup';

export const inputValidator =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      return next();
    } catch (error: any) {
      return res.status(400).json({
        code: 400,
        message: error.message,
      });
    }
  };

export const registerSchema = object({
  body: object({
    username: string()
      .min(6, 'Minimum length of username is 6')
      .max(30, 'Maximum length of username is 30')
      .required('Username is required'),
    email: string().email('Invalid email format').required('Email is required'),
    password: string()
      .min(6, 'Minimum length of password is 6')
      .max(16, 'Maximum length of password is 16')
      .required('Password is required'),
  }),
});
