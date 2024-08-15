import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import Produto from '../model/Produto';

const prisma = new PrismaClient();

export default class ProdutoController {

    async criar(req: Request, res: Response): Promise<Response> {
        const { nome, img, descricao, preco } = req.body;
        const data = {
        
          nome,
          img,
          descricao,
          preco
        }
        if (!nome || !img || !descricao || !preco) {
            return res.json({ message: "erro" });
        }

        try {
            const produtoModel= new Produto();
            const newProduto = await produtoModel.crirProduto(data)
            return res.json({message:"produto criado com sucesso!!!", newProduto});
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async exibir(req: Request, res: Response): Promise<Response>{
        const produtoModel= new Produto();
        const novosProdutos = await produtoModel.exibirProdutos()
        return res.json( novosProdutos);
    }
}
