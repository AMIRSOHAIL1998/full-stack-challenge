import { __awaiter } from "tslib";
import { login, signup } from '../services/auth';
import { validateSignup } from '../helper/userSchemaValidation';
export const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, type } = req.body;
        console.log('email :', email);
        const token = yield login(email, password, type);
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid credentials', error });
    }
});
export const signupUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validationResult = validateSignup(req === null || req === void 0 ? void 0 : req.body);
    try {
        const token = yield signup(req); // assuming user info is available in req.body
        res.status(200).json({ message: 'Signup successfully', token: token });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'Validation(s) Failed', error: validationResult });
    }
});
//# sourceMappingURL=auth.js.map