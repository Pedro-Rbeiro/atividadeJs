const numeroDiv = document.getElementById('resultado')
let saldo = 500
numeroDiv.innerHTML=`
<span><p> Saldo atual: <strong>${saldo}</strong></span> <br>
`
function depositar(){
    const valorDeposito = parseFloat(document.getElementById("input-deposito").value)
    console.log(valorDeposito)
    saldo += valorDeposito
    numeroDiv.innerHTML=`
<span><p> Saldo atual: <strong>${saldo}</strong></span> <br>
`
}
function sacar(){
    const valorSaque = parseFloat(document.getElementById("input-saque").value)
    if(valorSaque>saldo){
        alert("Saldo insuficiente para o saque!")
        return
    }
    console.log(valorSaque)
    saldo -= valorSaque
    numeroDiv.innerHTML=`
<span><p> Saldo atual: <strong>${saldo}</strong></span> <br>
`
}