//Fazendo com callback
// import fs from 'fs';

// fs.writeFile('teste.txt', 'bla bla bla', function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.appendFile('teste.txt', '\nteste appendFile', function (err) {
//       if (err) {
//         console.log(err);
//       } else {
//         fs.readFile('teste.txt', 'utf-8', function (err, data) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data); //Conteudo do arquivo
//           }
//         });
//       }
//     });
//   }
// });
/* writeFile tem 3 parametros:
 Nome do arquivo que vai ser escrito
 Conteudo do arquivo
 Função callback com err como parâmetro (caso dê erro)
 */

// //Fazendo com promises
// import { promises as fs } from 'fs';
// fs.writeFile('teste.txt', 'bla bla bla')
//   .then(() => {
//     fs.appendFile('teste.txt', '\nteste appendFile')
//       .then(() => {
//         fs.readFile('teste.txt', 'utf-8')
//           .then((resp) => {
//             console.log(resp);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Fazendo com Async/Await
import { promises as fs } from 'fs';
init();
writeReadJson();

async function init() {
  try {
    await fs.writeFile('teste.txt', 'bla bla bla');
    await fs.appendFile('teste.txt', '\nteste appendFile');
    const data = await fs.readFile('teste.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function writeReadJson() {
  try {
    const array = ['Gol', 'Palio', 'Uno'];

    await fs.writeFile('teste.json', JSON.stringify({ carros: array }));
    const data = await fs.readFile('teste.json');
    console.log(JSON.parse(data));
  } catch (err) {
    console.log(err);
  }
}
// JSON.stringfy converte o formato JSON para string
// JSON.parse converte o valor em um array
