function apostar(){
    let numerosDaMega = []
    let numerosEscolhidos = []
    let numerosCorretos = []
    let randomNum = ""
    const numero1 = parseFloat(document.getElementById("numero-aposta1").value)
    numerosEscolhidos.push(numero1)
    const numero2 = parseFloat(document.getElementById("numero-aposta2").value)
    numerosEscolhidos.push(numero2)
    const numero3 = parseFloat(document.getElementById("numero-aposta3").value)
    numerosEscolhidos.push(numero3)
    const numero4 = parseFloat(document.getElementById("numero-aposta4").value)
    numerosEscolhidos.push(numero4)
    for (let i = 0; i < numerosEscolhidos.length; i++) {
        randomNum = Math.floor(Math.random() * 60)
        numerosDaMega.push(randomNum)
        if (numerosEscolhidos.includes(randomNum)) {
            numerosCorretos.push(randomNum)
        }
    } 
    if (numerosCorretos.length == 4) {
        alert(`Números da Mega ${numerosDaMega}\nVocê acerto o(s) número(s) ${numerosCorretos} | ${numerosCorretos.length} de 4\nParabéns você ganhou R$40.000.000 !!!`)
    } else if (numerosCorretos.length > 0 && numerosCorretos.length < 4){
        alert(`Números da Mega ${numerosDaMega}\nVocê acerto o(s) número(s) ${numerosCorretos} | ${numerosCorretos.length} de 4\nMais sorte da próxima vez`)
    } else {
        alert(`Números da Mega ${numerosDaMega}\nVocê acertou nenhum número | ${numerosCorretos.length} de 4\nMais sorte da próxima vez`)
    }
}