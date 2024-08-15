"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const Produto_1 = __importDefault(require("../model/Produto"));
const prisma = new client_1.PrismaClient();
class ProdutoController {
    async criar(req, res) {
        const { nome, img, descricao, preco } = req.body;
        const data = {
            nome,
            img,
            descricao,
            preco
        };
        if (!nome || !img || !descricao || !preco) {
            return res.json({ message: "erro" });
        }
        try {
            const produtoModel = new Produto_1.default();
            const newProduto = await produtoModel.crirProduto(data);
            return res.json({ message: "produto criado com sucesso!!!", newProduto });
        }
        catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async exibir(req, res) {
        const produtoModel = new Produto_1.default();
        const novosProdutos = await produtoModel.exibirProdutos();
        return res.json(novosProdutos);
    }
}
exports.default = ProdutoController;
