function armazenarValor(){


//armazena o valor que o usuario digitou
var userInput = document.getElementById("userInput").value; 
//Exibe o valor armazenado
console.log("O valor da variavel e: " + userInput);

//Atializa o conteudo
document.getElementById("valorInserido").innerText = "O valor inserido e:" + userInput;

}