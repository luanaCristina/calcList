//make statement
var temp = 98.6;
var beanCounter = 4;
var reallyCool = true;
var motto = "I Rule";
temp = (temp - 32) * 5 / 9;
motto = motto + " and so do you!";
var pos = Math.random();

//fazendo mais de uma vez ou quantas vezes desejar
while (beanCounter > 0) {
    processBeans();
    beanCounter = beanCounter - 1;
   }

//tomando decisões
if (reallyCool) {
    invite = "You're invited!";
   } else {
    invite = "Sorry, we're at capacity.";
   }

//expressões
//numericas
(9/5) * temp + 32
Math.random() * 10

//boleanas
2 > 3
temp < 75
startTime > now
pet == "gato"

//strings
var name = "luana"

//outras expressões
function name(){
    document.getElementById("pink")
}
new Array(10)

//guardando diversos valores em uma variável (array)
var sorvete = ["abacaxi", "limão"]
sorvete.push("pitanga")

var sorvetes = new Array()
sorvetes[0] = "abacaxi"
sorvetes[1] = "limão"
sorvetes[2] = "pitanga"

// function iniciar(){
//     var button2 = document.getElementById("buttonSorvete")
//     button2.onclick = aoclicarButtonSorvete
// }
// function aoclicarButtonSorvete(){
//     alert("sorvete")
//         // var messagem = "Quero tomar sorvete de " + sorvetes[0]
//         // var randomico1 = Math.floor(Math.random() * sorvete.length)
        // var messagemSorvete = console.log(randomico1)
        //alert(messagemSorvete + messagem)
    //buttonSorvete.innerHTML = buttonSorvete
    // }


function buttonSorvete() {
  var mensagem = ("Quero tomar sorvete de " );
    var saborSorvete = ["abacaxi", "limão"]
  alert(mensagem + saborSorvete[0])

}
