"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = exports.hashPassword = exports.verifyToken = exports.generateToken = void 0;
const fast_jwt_1 = require("fast-jwt");
const bcrypt_1 = __importDefault(require("bcrypt"));
const secret = process.env.JWT_SECRET || "your-secret-key";
const signer = (0, fast_jwt_1.createSigner)({ key: secret });
const verifier = (0, fast_jwt_1.createVerifier)({ key: secret });
function generateToken(payload) {
    return signer({ exp: Math.floor(Date.now() / 1000) + 60 * 60, ...payload });
}
exports.generateToken = generateToken;
function verifyToken(token) {
    try {
        return verifier(token);
    }
    catch (error) {
        return "Invalid token";
    }
}
exports.verifyToken = verifyToken;
async function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt_1.default.hash(password, saltRounds);
}
exports.hashPassword = hashPassword;
async function comparePasswords(inputPassword, hashedPassword) {
    return bcrypt_1.default.compare(inputPassword, hashedPassword);
}
exports.comparePasswords = comparePasswords;
