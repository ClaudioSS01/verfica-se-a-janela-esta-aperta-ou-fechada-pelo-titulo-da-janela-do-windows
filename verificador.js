const {
    exec
  } = require('child_process');
  
 function verificaSeAJanelaEstaAbertaPeloTitulo( tituloDaJanela = "tree") {
  let comandoDeCmd = `veficaJanelaAbertaTitulo.py  "${tituloDaJanela}"`
    return new Promise ((resolve)=>{
      exec(comandoDeCmd, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        resolve(false);
      }
      console.log(`stdout: ${stdout}`)
      resolve(stdout);
    });
  })
  }

verificaSeAJanelaEstaAbertaPeloTitulo('chrome').then((janelaAberta)=>{
  if(janelaAberta.includes("aberta")){
    console.log('janela aberta')
  }else{
    console.log('janela fechada')
  }
})
