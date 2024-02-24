"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.authenticateUser = void 0;
const client_1 = require("@prisma/client");
const authService_1 = require("./authService");
const prisma = new client_1.PrismaClient();
async function authenticateUser(name, password) {
    const user = await prisma.user.findFirst({ where: { name } });
    if (!user) {
        return null; // User not found
    }
    const passwordMatch = await (0, authService_1.comparePasswords)(password, user.password);
    if (passwordMatch) {
        return (0, authService_1.generateToken)(user);
    }
    return null; // Incorrect password
}
exports.authenticateUser = authenticateUser;
async function createUser({ name, password, email, }) {
    const hashedPassword = await (0, authService_1.hashPassword)(password);
    const user = await prisma.user.create({
        data: {
            name,
            password: hashedPassword,
            email,
        },
    });
    return { name: user.name, email: user.email, id: user.id };
}
exports.createUser = createUser;
