import http from 'http';

//Callback recebe as requisições e trata elas
//de acordo com o que foi definido
//req - Parametro da requisição
//res - Parametro de resposta (tudo que quiser responder para o usuário)
http
  .createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/teste') {
      res.write('Get /teste executado com sucesso');
    } else {
      res.write('Hello World');
    }

    res.statusCode = 200;
    res.end();
  })
  .listen(8001);
