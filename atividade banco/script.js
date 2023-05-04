const numeroDiv = document.getElementById('resultado')
const extratoDiv = document.getElementById("extrato")
const today = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let day = today.getUTCDate()+"/"+month[today.getMonth()]+"/"+today.getFullYear()
let hours = today.getHours()+":"+ today.getMinutes()+":"+today.getSeconds();
let saldo = 500
numeroDiv.innerHTML=`
<span><p> Saldo atual: <strong>R$${saldo}</strong></span> <br>
`
function depositar(){
    const valorDeposito = parseFloat(document.getElementById("input-deposito").value)
    if(valorDeposito !== valorDeposito){
        alert("Por favor insira um valor para o depósito")
        return
    }
    console.log(valorDeposito)
    saldo += valorDeposito
    numeroDiv.innerHTML=`
    <span><p> Saldo atual: <strong>R$${saldo}</strong></span> <br>
    `
    extratoDiv.innerHTML += `
    <p id="deposito">
        ${day} ${hours} <br><span class="valor-extrato">+R$${valorDeposito}</span>
    </p>
    `
}
function sacar(){
    const valorSaque = parseFloat(document.getElementById("input-saque").value)
    if(valorSaque !== valorSaque){
        alert("Por favor insira um valor para o saque")
        return
    }
    if(valorSaque>saldo){
        alert("Saldo insuficiente para o saque!")
        return
    }
    console.log(valorSaque)
    saldo -= valorSaque
    numeroDiv.innerHTML=`
    <span><p> Saldo atual: <strong>R$${saldo}</strong></span> <br>
    `
    extratoDiv.innerHTML += `
    <p id="saque">
        ${day} ${hours} <br><span class="valor-extrato">-R$${valorSaque}</span>
    </p>
    `
}