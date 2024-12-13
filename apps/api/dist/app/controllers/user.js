import { __awaiter } from "tslib";
import { readUsersAnalyticsData, readAllUsers, readUserById, updateUserData, deleteUserData, } from '../services/user';
// Function to get analytics record
export const getUserAnalytics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const analytics = yield readUsersAnalyticsData();
        res.status(200).json(analytics);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching analytics', error });
    }
});
// Function to get all users data
export const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield readAllUsers(req, res);
        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error });
    }
});
// Function to get a single user by ID
export const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    try {
        const user = yield readUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
});
// Function to update a user by ID
export const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email, type } = req.body;
    try {
        const updatedUser = yield updateUserData(id, { name, email, type });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});
// Function to delete a user by ID
export const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedUser = yield deleteUserData(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});
//# sourceMappingURL=user.js.map