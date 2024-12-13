/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "tslib"
const external_tslib_namespaceObject = require("tslib");
;// CONCATENATED MODULE: external "bcrypt"
const external_bcrypt_namespaceObject = require("bcrypt");
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_namespaceObject);
;// CONCATENATED MODULE: external "knex"
const external_knex_namespaceObject = require("knex");
var external_knex_default = /*#__PURE__*/__webpack_require__.n(external_knex_namespaceObject);
;// CONCATENATED MODULE: ./src/database/knexfile.js
// knexfile.js
const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: 'apps/api/src/database.sqlite3', // Adjust relative path from knexfile.js to the database
    },
    useNullAsDefault: true,
    migrations: {
        directory: './migrations', // Adjust path for migrations folder
    },
    seeds: {
        directory: './seeds', // Adjust path for seeds folder
    },
};
/* harmony default export */ const knexfile = (knexConfig);

;// CONCATENATED MODULE: ./src/database/connection.js
// connection.ts (or connection.js if using JavaScript)

 // Assuming knexfile contains your database configuration
const db = external_knex_default()(knexfile); // Initialize knex with the config
/* harmony default export */ const connection = (db);

;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
;// CONCATENATED MODULE: external "uuid"
const external_uuid_namespaceObject = require("uuid");
;// CONCATENATED MODULE: ./src/app/helper/generateUniqueId.ts

// Function to generate unique id
const generateUniqueId = (prefix) => {
    const randomString = (0,external_uuid_namespaceObject.v4)().replace(/-/g, '');
    return `${prefix}_${randomString}`;
};

;// CONCATENATED MODULE: ./src/app/services/auth.ts





const login = (email, password, type) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
    const user = yield connection('users').where({ email }).first();
    if (!user)
        throw new Error('User not found');
    if ((user === null || user === void 0 ? void 0 : user.type) !== type) {
        throw new Error('Please check your login credentials.');
    }
    const isPasswordValid = yield external_bcrypt_default().compare(password, user.password);
    if (!isPasswordValid)
        throw new Error('Invalid credentials');
    const token = external_jsonwebtoken_default().sign({
        user_id: user.id,
        email: user === null || user === void 0 ? void 0 : user.email,
        name: user === null || user === void 0 ? void 0 : user.name,
        type: user === null || user === void 0 ? void 0 : user.type,
    }, 'your-jwt-secret', {
        expiresIn: '1h',
    });
    return token;
});
const signup = (request) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
    const { name, email, password, type } = request.body;
    const existingUser = yield connection('users').where({ email }).first();
    if (existingUser)
        throw new Error('User already exists');
    const hashedPassword = yield external_bcrypt_default().hash(password, 10);
    const [user] = yield connection('users')
        .insert({
        id: generateUniqueId('user'),
        email,
        name,
        password: hashedPassword,
        type,
    })
        .returning(['id', 'email', 'name', 'type']);
    // Generate a JWT token for the new user
    const token = external_jsonwebtoken_default().sign({ user_id: user.id, name: user.name, email: user.email, type: user.type }, 'your-jwt-secret', // this this should come from .env
    {
        expiresIn: '1h',
    });
    return token;
});

;// CONCATENATED MODULE: external "joi"
const external_joi_namespaceObject = require("joi");
var external_joi_default = /*#__PURE__*/__webpack_require__.n(external_joi_namespaceObject);
;// CONCATENATED MODULE: ./src/app/helper/userSchemaValidation.ts

// Define the validation schema for signup
const signupSchema = external_joi_default().object({
    email: external_joi_default().string().email().required(),
    password: external_joi_default().string().min(6).required(),
    name: external_joi_default().string().min(3).required(),
    type: external_joi_default().string().min(4).required(),
});
// Define the validation schema for login
const loginSchema = external_joi_default().object({
    email: external_joi_default().string().email().required(),
    password: external_joi_default().string().min(6).required(),
    type: external_joi_default().string().required(),
});
// Validate user input in signup route
const validateSignup = (data) => {
    const { error } = signupSchema.validate(data);
    if (error) {
        throw new Error(error.details[0].message);
    }
};
// Validate user input in login route
const validateLogin = (data) => {
    const { error } = loginSchema.validate(data);
    if (error) {
        throw new Error(error.details[0].message);
    }
};

;// CONCATENATED MODULE: ./src/app/controllers/auth.ts



const loginUser = (req, res) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
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
const signupUser = (req, res) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
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

;// CONCATENATED MODULE: ./src/app/middlewares/authMiddleware.ts

const authMiddleware = (req, res, next) => {
    var _a, _b;
    const token = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1]) || ((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.token); // Assuming Bearer token
    if (!token)
        return res.status(401).json({ message: 'Token required' });
    try {
        const decoded = external_jsonwebtoken_default().verify(token, 'your-jwt-secret');
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

;// CONCATENATED MODULE: ./src/app/routes/auth.ts



const router = (0,external_express_namespaceObject.Router)();
router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/authorize', authMiddleware, (req, res) => {
    return res
        .status(200)
        .json({ message: 'User is authorized', user: req.user });
});
/* harmony default export */ const auth = (router);

;// CONCATENATED MODULE: ./src/app/services/user.ts


const readUsersAnalyticsData = () => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    // Example query to fetch user data (change this to fit your DB schema)
    const totalUser = yield connection('users').count('* as users');
    const adminCount = yield connection('users')
        .where('type', 'admin')
        .count('* as admins');
    const userCount = Number(((_a = totalUser[0]) === null || _a === void 0 ? void 0 : _a.users) - ((_b = adminCount[0]) === null || _b === void 0 ? void 0 : _b.admins));
    return {
        total: (_c = totalUser[0]) === null || _c === void 0 ? void 0 : _c.users,
        admin: (_d = adminCount[0]) === null || _d === void 0 ? void 0 : _d.admins,
        user: userCount,
    };
});
const readAllUsers = (req, res) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        // Fetch all users from the 'users' table
        const users = yield connection('users').select('id', 'name', 'email', 'type', 'created_at', 'updated_at');
        return users;
    }
    catch (error) {
        throw new Error('Error fetching user by ID');
    }
});
// Function to read a single user by ID
const readUserById = (id) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        // Fetch user by ID from the 'users' table
        const user = yield connection('users')
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
const updateUserData = (id, updatedData) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield connection('users')
            .where('id', id)
            .update({
            name: updatedData.name,
            email: updatedData.email,
            type: updatedData.type || 'user',
            updated_at: connection.fn.now(),
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
const deleteUserData = (id) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield connection('users').where('id', id).del().returning('id');
        if (deletedUser.length === 0) {
            throw new Error('User not found');
        }
        return deletedUser[0];
    }
    catch (error) {
        throw new Error('Error deleting user');
    }
});

;// CONCATENATED MODULE: ./src/app/controllers/user.ts


// Function to get analytics record
const getUserAnalytics = (req, res) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
    try {
        const analytics = yield readUsersAnalyticsData();
        res.status(200).json(analytics);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching analytics', error });
    }
});
// Function to get all users data
const getUsers = (req, res) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
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
const getUserById = (req, res) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
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
const updateUser = (req, res) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
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
const deleteUser = (req, res) => (0,external_tslib_namespaceObject.__awaiter)(void 0, void 0, void 0, function* () {
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

;// CONCATENATED MODULE: ./src/app/routes/user.ts


const user_router = (0,external_express_namespaceObject.Router)();
user_router.get('/statistics', getUserAnalytics);
user_router.get('/read', getUsers);
user_router.get('/read/:id', getUserById);
user_router.post('/update/:id', updateUser);
user_router.post('/delete/:id', deleteUser);
/* harmony default export */ const user = (user_router);

;// CONCATENATED MODULE: ./src/main.ts





const app = external_express_default()();
app.use(external_cors_default()());
app.use(external_express_default().json());
app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to api!' });
});
app.use('/auth', auth);
app.use('/users', authMiddleware, user);
const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/users/read`);
});
server.on('error', console.error);

/******/ })()
;