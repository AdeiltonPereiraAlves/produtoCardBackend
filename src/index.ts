import express, { Request, Response } from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import produtoRouter from './router/ProdutoRouter'
import ProdutoController from './controller/ProdutoController';
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });
app.use('/api', produtoRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
