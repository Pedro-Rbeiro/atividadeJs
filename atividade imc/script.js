function calcularImc(){
    const peso = document.getElementById("input-peso").value
    const altura = document.getElementById("input-altura").value
    const numeroDiv = document.getElementById('resultado')
    let num1 = altura.slice("",1)
    let num2 = altura.slice(1)
    let allNum = num1+"."+num2
    let imc = peso / (allNum * allNum)
    numeroDiv.innerHTML=`
    <span><p> Seu IMC deu <strong>${imc.toFixed(2)}</strong></span> <br>
    `
    console.log(imc,num1,num2,allNum)
}