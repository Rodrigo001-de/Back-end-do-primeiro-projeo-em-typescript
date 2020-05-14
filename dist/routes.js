"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserControllers_1 = __importDefault(require("./controllers/UserControllers"));
var routes = express_1.Router();
routes.get('/users', UserControllers_1.default.index);
routes.post('/users', UserControllers_1.default.create);
exports.default = routes;
