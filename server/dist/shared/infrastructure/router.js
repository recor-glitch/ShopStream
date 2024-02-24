"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = __importDefault(require("@/api/auth/application/authController"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const router = express_1.default.Router();
router.use((0, helmet_1.default)()).use((0, cors_1.default)()).use(express_1.default.json());
router.use("/auth", authController_1.default);
exports.default = router;
