//só conseguimos manipular o DOM quando a página inteira é loade
function iniciar(){
    var alerta = document.getElementById("alerta")
    alerta.innerHTML = "Vocês são legais"
}
//esse comando serve para avisar para executar o código quando a página estiver inteiramente aberta (loaded)
//window.onload = iniciar

function iniciar2(){
var button = document.getElementById("buttonLivro")
button.onclick = aoClicarButtonLivro
}
function aoClicarButtonLivro(){
    alert("o botão está sendo clicado")
}
window.onload = iniciar2