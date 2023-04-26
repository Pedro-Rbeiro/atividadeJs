function numero1(){
    const numeroDiv = document.getElementById('div_numbers')
    let numero = 1
    let recebeDiv = ""
    numeroDiv.innerHTML = ""
    while (numero <= 500){
        recebeDiv += `
        <span> ${numero}</span> <br>
        `
        numeroDiv.innerHTML = recebeDiv
        numero++
    }

}
function numero500(){
    const numeroDiv = document.getElementById('div_numbers')
    let numeroDec = 500
    let recebeDivDec = ""
    numeroDiv.innerHTML = ""
    while (numeroDec >= 1){
        recebeDivDec += `
        <span> ${numeroDec}</span> <br>
        `
        numeroDiv.innerHTML = recebeDivDec
        numeroDec--
    }

}