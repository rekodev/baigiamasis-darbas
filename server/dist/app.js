"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var db_1 = __importDefault(require("./config/db"));
var user_controllers_1 = require("./controllers/user.controllers");
var app = (0, express_1.default)();
dotenv_1.default.config();
var PORT = process.env.PORT || 5000;
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:5173' }));
(0, db_1.default)();
app.listen(PORT, function () { return console.log("Listening on port ".concat(PORT)); });
app.get('/api/users', user_controllers_1.getAllUsers);
