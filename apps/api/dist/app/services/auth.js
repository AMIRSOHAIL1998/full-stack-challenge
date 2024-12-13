import { __awaiter } from "tslib";
import bcrypt from 'bcrypt';
import db from '../../database/connection';
import jwt from 'jsonwebtoken';
import { generateUniqueId } from '../helper/generateUniqueId';
export const login = (email, password, type) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db('users').where({ email }).first();
    if (!user)
        throw new Error('User not found');
    if ((user === null || user === void 0 ? void 0 : user.type) !== type) {
        throw new Error('Please check your login credentials.');
    }
    const isPasswordValid = yield bcrypt.compare(password, user.password);
    if (!isPasswordValid)
        throw new Error('Invalid credentials');
    const token = jwt.sign({
        user_id: user.id,
        email: user === null || user === void 0 ? void 0 : user.email,
        name: user === null || user === void 0 ? void 0 : user.name,
        type: user === null || user === void 0 ? void 0 : user.type,
    }, 'your-jwt-secret', {
        expiresIn: '1h',
    });
    return token;
});
export const signup = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, type } = request.body;
    const existingUser = yield db('users').where({ email }).first();
    if (existingUser)
        throw new Error('User already exists');
    const hashedPassword = yield bcrypt.hash(password, 10);
    const [user] = yield db('users')
        .insert({
        id: generateUniqueId('user'),
        email,
        name,
        password: hashedPassword,
        type,
    })
        .returning(['id', 'email', 'name', 'type']);
    // Generate a JWT token for the new user
    const token = jwt.sign({ user_id: user.id, name: user.name, email: user.email, type: user.type }, 'your-jwt-secret', // this this should come from .env
    {
        expiresIn: '1h',
    });
    return token;
});
//# sourceMappingURL=auth.js.map