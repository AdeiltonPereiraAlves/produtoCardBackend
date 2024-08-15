"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const ProdutoRouter_1 = __importDefault(require("./router/ProdutoRouter"));
const app = (0, express_1.default)();
const port = 3001;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });
app.use('/api', ProdutoRouter_1.default);
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
