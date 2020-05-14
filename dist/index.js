"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
// Inferência de tipos: é um conceito do TypeScript
// que quer dizer que o TypeScript na grande maioria das vezes
// vai conseguir determinar de forma automática 
// o tipo de variável e o tipo de retorno de funções po exemplo 
var app = express_1.default();
app.use(routes_1.default);
app.listen(3333);
