import { response, Router } from 'express';
import { loginUser, signupUser } from '../controllers/auth';
import { authMiddleware } from '../middlewares/authMiddleware';

const router: any = Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/authorize', authMiddleware, (req, res) => {
  return res
    .status(200)
    .json({ message: 'User is authorized', user: req.user });
});

export default router;
