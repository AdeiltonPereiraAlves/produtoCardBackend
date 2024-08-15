import { Router } from "express";
import ProdutoController from "../controller/ProdutoController";

const router = Router()
const produtoController = new ProdutoController();

router.post('/produto', produtoController.criar);
router.get('/produtos',produtoController.exibir)
export default router