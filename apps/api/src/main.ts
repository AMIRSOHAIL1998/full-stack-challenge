/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { log } from 'console';
import express from 'express';
import * as path from 'path';
import authRoutes from './app/routes/auth';
import userRoutes from './app/routes/user';
import { authMiddleware } from './app/middlewares/authMiddleware';
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/users', authMiddleware, userRoutes);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/users/read`);
});
server.on('error', console.error);
