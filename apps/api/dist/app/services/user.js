import { __awaiter } from "tslib";
import db from '../../database/connection';
export const readUsersAnalyticsData = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    // Example query to fetch user data (change this to fit your DB schema)
    const totalUser = yield db('users').count('* as users');
    const adminCount = yield db('users')
        .where('type', 'admin')
        .count('* as admins');
    const userCount = Number(((_a = totalUser[0]) === null || _a === void 0 ? void 0 : _a.users) - ((_b = adminCount[0]) === null || _b === void 0 ? void 0 : _b.admins));
    return {
        total: (_c = totalUser[0]) === null || _c === void 0 ? void 0 : _c.users,
        admin: (_d = adminCount[0]) === null || _d === void 0 ? void 0 : _d.admins,
        user: userCount,
    };
});
export const readAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all users from the 'users' table
        const users = yield db('users').select('id', 'name', 'email', 'type', 'created_at', 'updated_at');
        return users;
    }
    catch (error) {
        throw new Error('Error fetching user by ID');
    }
});
// Function to read a single user by ID
export const readUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch user by ID from the 'users' table
        const user = yield db('users')
            .select('id', 'name', 'email', 'type', 'created_at', 'updated_at')
            .where('id', id)
            .first();
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    catch (error) {
        throw new Error('Error fetching user by ID');
    }
});
// Function to update a user by ID
export const updateUserData = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield db('users')
            .where('id', id)
            .update({
            name: updatedData.name,
            email: updatedData.email,
            type: updatedData.type || 'user',
            updated_at: db.fn.now(),
        })
            .returning(['id', 'name', 'email', 'type', 'created_at', 'updated_at']);
        if (updatedUser.length === 0) {
            throw new Error('User not found');
        }
        return updatedUser;
    }
    catch (error) {
        throw new Error('Error updating user');
    }
});
// Function to delete a user by ID
export const deleteUserData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield db('users').where('id', id).del().returning('id');
        if (deletedUser.length === 0) {
            throw new Error('User not found');
        }
        return deletedUser[0];
    }
    catch (error) {
        throw new Error('Error deleting user');
    }
});
//# sourceMappingURL=user.js.map