import express from 'express';

const app = express();
app.use(express.json());

//Nível da aplicação
//use - Pede que o codigo seja executado sempre
//(independente de quem estiver passando)
app.use((req, res, next) => {
  console.log(new Date());
  next();
});
app.get('/teste', (req, res) => {
  res.end();
});

//Nível do roteador - Agrupa requisições e
//as coloca em outro arquivo
import carrosRouter from './carrosRouter.js';

app.use('/carros', carrosRouter);
//Direciona tudo que chega aqui pro carrosRouter.js

app.listen(3002, () => {
  console.log('API Started');
});
