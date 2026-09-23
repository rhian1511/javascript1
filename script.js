function mostrarAlerta(){
alert("Bom dia Turma do  1°Ano Exatas!")
}

function pedirNome(){
    let nome = prompt("Informe o seu nome: ")
    alert("Bom dia, " + nome)
}

function somarNumeros(){
    let primeiroValor  = Number(prompt("Informe o primeiro numero: "))
    let segundoValor = Number(prompt("Inorme o segundo numero"))
    let soma = primeiroValor + segundoValor
    alert("A soma dos números é: " + soma)
}

function mudarFormatacao(){
    let resultado = document.getElementById("resultado")
    let nome = prompt("Informe o seu nome: ")
    resultado.textContent = "Bom dia! " + nome
    resultado.style.background = "pink"
}