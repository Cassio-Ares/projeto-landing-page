var setaesquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadireta = window.document.getElementById("seta-direita")

function RolarParaDireita()
{
    leonardo.style = "display: none"
    bruna.style = "display: flex"
    setaesquerda.style = "display: flex; margen-top:55px"
    setadireta.style = "display: none"
 }

 function RolarParaEsquerda()
 {
    leonardo.style = "display: flex"
    bruna.style = "display: none"
    setadireta.style = "display: flex"
    setaesquerda.style = "display: none"
 }