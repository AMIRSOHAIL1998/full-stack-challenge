import cors from 'cors';
import express from 'express';
import authRoutes from './app/routes/auth';
import userRoutes from './app/routes/user';
import { authMiddleware } from './app/middlewares/authMiddleware';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/auth', authRoutes);
app.use('/users', authMiddleware, userRoutes);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/users/read`);
});
server.on('error', console.error);
