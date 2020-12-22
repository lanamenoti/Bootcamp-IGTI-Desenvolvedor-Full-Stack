import express from 'express';

const app = express();
app.use(express.json());

//Acessando direto pela pasta
app.use(express.static('public'));

//Caminho virtual
app.use('/images', express.static('public'));

app.listen(3005, () => {
  console.log('API Started');
});
