"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hello_1 = __importDefault(require("./hello"));
const echo_1 = __importDefault(require("./echo"));
const sum_1 = __importDefault(require("./sum"));
const users_1 = __importDefault(require("./users"));
const router = (0, express_1.Router)();
router.use('/', hello_1.default);
router.use('/', echo_1.default);
router.use('/', sum_1.default);
router.use('/', users_1.default);
exports.default = router;
