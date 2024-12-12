import { Router } from 'express';
import { getUserAnalytics, getUsers } from '../controllers/user';

const router: any = Router();

router.get('/statistics', getUserAnalytics);
router.get('/read', getUsers);

export default router;
