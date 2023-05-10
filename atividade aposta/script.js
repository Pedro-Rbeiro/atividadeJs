let arr = []
let money = 100
function apostar(){
    const numeroAposta = parseFloat(document.getElementById("numero-aposta").value)
    const valorAposta = parseFloat(document.getElementById("valor-aposta").value)
    let win = false
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
    for(j=0; j<arr.length; j++){
        
        if(arr[j]==numeroAposta){
            win = true
        }

    }
    console.log(win)
    console.log(arr)
    if(win){
        money += valorAposta
        alert(`Você ganhou R$${valorAposta} conto, seu saldo é de: ${money}` )
    }else{
    money -= valorAposta
    alert(`Você perdeu R$${valorAposta} :( Seu saldo é de ${money}`)
    }


}   
