import bcrypt from 'bcrypt';
import db from '../../database/connection';
import jwt from 'jsonwebtoken';
import { generateUniqueId } from '../helper/generateUniqueId';

export const login = async (email: string, password: string, type: string) => {
  email = email.toLowerCase();
  type = type.toLowerCase();
  const user = await db('users').where({ email }).first();
  if (!user) throw new Error('User not found');
  if (user?.type !== type) {
    throw new Error('Please check your login credentials.');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid credentials');

  const token = jwt.sign(
    {
      user_id: user.id,
      email: user?.email,
      name: user?.name,
      type: user?.type,
    },
    'your-jwt-secret',
    {
      expiresIn: '1h',
    }
  );
  return token;
};

export const signup = async (request: any) => {
  let { name, email, password, type } = request.body;
  const existingUser = await db('users').where({ email }).first();
  if (existingUser) throw new Error('User already exists');
  type = type.toLowerCase();
  email = email.toLowerCase();

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log('type', type);

  const [user] = await db('users')
    .insert({
      id: generateUniqueId('user'),
      email,
      name,
      password: hashedPassword,
      type,
    })
    .returning(['id', 'email', 'name', 'type']);

  // Generate a JWT token for the new user
  const token = jwt.sign(
    { user_id: user.id, name: user.name, email: user.email, type: user.type },
    'your-jwt-secret', // this this should come from .env
    {
      expiresIn: '1h',
    }
  );

  return token;
};
