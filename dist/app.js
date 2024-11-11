"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// Add middleware
app.use(express_1.default.json());
// Add routes
app.use('/', routes_1.default);
// Serve static files from 'public'
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
exports.default = app;
