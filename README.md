# verfica-se-a-janela-esta-aperta-ou-fechada-pelo-titulo-da-janela-do-windows
# Pre requisitos:
<ul>
<li>Ter node.js instalado</li>
<li>Python instalado</li>
<li>npm install pyautogui</li>
</ul>

<br>
# Como usar:

```
verificaSeAJanelaEstaAbertaPeloTitulo('chrome').then((janelaAberta)=>{
  if(janelaAberta.includes("aberta")){
    console.log('janela aberta')
  }else{
    console.log('janela fechada')
  }
})

```
