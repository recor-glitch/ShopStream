"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const authService_1 = require("./authService");
function authenticateToken(req, res, next) {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "Unauthorized - Token missing" });
    }
    const decoded = (0, authService_1.verifyToken)(token);
    if (typeof decoded === "string") {
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
    // Attach user information to the request for later use in route handlers
    req.user = decoded;
    next();
}
exports.authenticateToken = authenticateToken;
