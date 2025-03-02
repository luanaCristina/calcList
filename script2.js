//primeira variável é para entrada do valor ganho por mês
var valorMes = document.querySelector("#ganho-mes"); 

//segunda variável é para entrada das horas por dia trabalhadas
var horasDia = document.querySelector("#horas-dia"); 

//terceira variável é para entrada dos dias por mês
var diasMes = document.querySelector("#dias-mes"); 

//quarta variável é para resposta do cálculo
var resposta = document.querySelector("#reposta"); 

//função para calcular
function calcularValorHora() {
  var valorHora = (valorMes.valueAsNumber / diasMes.valueAsNumber)/ horasDia.valueAsNumber;

resposta.textContent = valorHora
}