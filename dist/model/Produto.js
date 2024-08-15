"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prisma_1 = require("../db/Prisma");
class Produto {
    constructor() { }
    async crirProduto(produto) {
        return Prisma_1.dbPdv.produto.create({ data: produto });
    }
    async exibirProdutos() {
        return Prisma_1.dbPdv.produto.findMany();
    }
}
exports.default = Produto;
