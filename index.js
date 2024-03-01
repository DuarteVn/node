// const chalk = require('chalk');
import fs from 'fs';
import chalk from 'chalk';

//============================= TRATAR ERRO

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 
        'Não há arquivos no diretório'));
}


// PROMISES COM  THEN()
// function pegarArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//       .readFile(caminhoDoArquivo, encoding)
//       .then((texto) => console.log(chalk.green(texto)))  
//       .catch(trataErro);
// }

// function pegarArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) =>{
//         if (erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     })
// }


// async/await

async function pegarArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile
        (caminhoDoArquivo, encoding)
        console.log(chalk.green(texto));        
    } catch(erro) {
        trataErro(erro)
    }
    finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

pegarArquivo('./arquivos/texto.md');

pegarArquivo('./arquivos/');

// \[[^[\]]*?\]

// \(https?:\/\/[^\s?].[^\s]*\)