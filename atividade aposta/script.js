let arr = []
let money = 100
function apostar(){
    const numeroAposta = parseFloat(document.getElementById("numero-aposta").value)
    const valorAposta = parseFloat(document.getElementById("valor-aposta").value)
    if(numeroAposta >9){
        return alert(`Insira um valor de no maximo "9"`)
    }
    if (numeroAposta !== numeroAposta){
        return alert(`Insira um numero para a aposta`)
    }
    if (valorAposta !== valorAposta){
        return alert(`Insira um valor para a aposta`)
    }
    if(valorAposta>money){
        alert(`Saldo insuficiente! Seu saldo é de R$${money}`)
        return
    }else{
        
    }
    let arr = []
    let randomNum = ""
    for(i=0;i<=5;i++){
        randomNum = Math.floor(Math.random()*10)
        arr.push(randomNum)
    }
    console.log(arr)
    if(arr.includes(numeroAposta)){
        money += valorAposta
        alert(`Você ganhou R$${valorAposta} conto, seu saldo é de: ${money}` )
    }else{
        money -= valorAposta
        alert(`Você perdeu R$${valorAposta} :( Seu saldo é de ${money}`)
    }
}
