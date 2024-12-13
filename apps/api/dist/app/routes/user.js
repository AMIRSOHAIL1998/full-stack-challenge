import { Router } from 'express';
import { deleteUser, getUserAnalytics, getUserById, getUsers, updateUser, } from '../controllers/user';
const router = Router();
router.get('/statistics', getUserAnalytics);
router.get('/read', getUsers);
router.get('/read/:id', getUserById);
router.post('/update/:id', updateUser);
router.post('/delete/:id', deleteUser);
export default router;
//# sourceMappingURL=user.js.map