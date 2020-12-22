//Importando o express depois de ter intalado ele
import express from 'express';

//Criando uma instância do express
const app = express();

//Configuradno rotas(Qual caminho o express vai
//responder cada requisição)
//Callback é executada quando o caminho for atingido
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  res.send('Hello World POST!');
});

//Iniciando o servidor
app.listen(3000, () => {
  console.log('API started!');
});
