import express from 'express';

const app = express();
app.use(express.json());

//Tratamento padrão do express
app.get('/', (req, res) => {
  throw new Error('Error message test');
  //Simulando ERR
});

//Tratando o erro de forma mais adequada para o usuário
app.use((err, req, res, next) => {
  console.log('Error 1');
  res.status(500).send('Ocorreu um erro, tente novamente mais tarde');
});

//Tratando função assíncrona
app.post('/', async (req, res, next) => {
  throw new Error('Error message async');
  //Esse erro não cai nas funções de erro ali em baixo por ser assíncrono
});

//Para cair nos erros que configuramos:
app.post('/', async (req, res, next) => {
  try {
    throw new Error('Error message async');
  } catch (err) {
    next(err); //Assim ele cai no tratatmento
  }
});

app.listen(3003, (req, res) => {
  console.log('API Started');
});
