import { Request, Response } from 'express';
import { login, signup } from '../services/auth';
import { validateSignup, validateLogin } from '../helper/userSchemaValidation';

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password, type } = req.body;
    console.log('email :', email);

    const token = await login(email, password, type);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: 'Invalid credentials', error });
  }
};

export const signupUser = async (req: any, res: Response) => {
  const validationResult: any = validateSignup(req?.body);
  try {
    const token = await signup(req); // assuming user info is available in req.body
    res.status(200).json({ message: 'Signup successfully', token: token });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Validation(s) Failed', error: validationResult });
  }
};
