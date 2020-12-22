//Importando o express depois de ter intalado ele
import express from 'express';

//Criando uma instância do express
const app = express();

//Mais opções de definição de rotas

//.all - Captura todos os métodos HTTP
//que chegam para o endpoint
app.all('/testAll', (req, res) => {
  res.send(req.method);
  //Propriedade .method retorna qual método
  //HTTP está sendo consumido
});

//Definindo rotas com caracteres especiais

//? - Faz com que a última letra seja opcional
app.get('/teste?', (req, res) => {
  res.send('/teste?');
});

//+ - Faz com que a letra anterior a ele possa
//ser repetida várias vezes que vai funcionar
app.get('/buzz+', (req, res) => {
  res.send('/buzz+');
});

//* - Faz com que possa ser colocado qualquer coisa
//no lugar do *
app.get('/one*Blue', (req, res) => {
  res.send(req.path);
  //path vai responder a rota que colocarmos
});

//() - String colocada dentro desse caractere é
//considerada como unidade
app.post('/test(ing)?', (req, res) => {
  res.send('/test(ing)?');
});

//Expressão regular - É possível expressar várias
//strings
app.get(/.*Red$/, (req, res) => {
  res.send('/.*Red$/');
});

//Parâmentros na rota
app.get('/testeParam/:id', (req, res) => {
  res.send(req.params.id);
});

//Parâmetros via query - o parâmetro é colocado na
//própria url a partir de uma ?, & - Adiciona outros parâmetros
//Retorna um objeto json com as informações digitadas na url
app.get('/testeQuery', (req, res) => {
  res.send(req.query);
});

//next (terceiro parâmetro da função) - Permite que mais
//de uma função seja executada para cada requisição
app.get(
  '/testMultipleHandlers',
  (req, res, next) => {
    console.log('Callback 1');
    next();
  },
  (req, res) => {
    console.log('Callback 2');
    req.end(); //Fechando a requisisão
  }
);

//next com array
const callback1 = (req, res, next) => {
  console.log('Callback 1');
  next();
};
const callback2 = (req, res, next) => {
  console.log('Callback 2');
  res.end();
};
app.get('/testMultipleHandlersArray', [callback1, callback2]);

//Route - Rotas que respondem ao mesmo endereço, só muda o método
//HTTP podem ser todas agrupadas no mesmo route
app
  .route('/testRoute')
  .get((req, res) => {
    res.send('/testRoute GET');
  })
  .post((req, res) => {
    res.send('/testRoute POST');
  })
  .delete((req, res) => {
    res.send('/testRoute DELETE');
  });

//Iniciando o servidor
app.listen(3001, () => {
  console.log('API started!');
});
