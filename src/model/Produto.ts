import { dbPdv } from "../db/Prisma";
import produtoInterface from "./produtoInterface";

export default class Produto{
     constructor(){}
    async crirProduto(produto: produtoInterface){
       return dbPdv.produto.create({data: produto})
    }
    async exibirProdutos(){
      return dbPdv.produto.findMany()
    }
}