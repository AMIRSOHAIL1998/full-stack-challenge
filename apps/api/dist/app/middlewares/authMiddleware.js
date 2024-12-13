import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
    var _a, _b;
    const token = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1]) || ((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.token); // Assuming Bearer token
    if (!token)
        return res.status(401).json({ message: 'Token required' });
    try {
        const decoded = jwt.verify(token, 'your-jwt-secret');
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};
//# sourceMappingURL=authMiddleware.js.map