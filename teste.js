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