// desenvolvido por Pedro R.
function calculo(){
    const candidato1 = document.getElementById('candidato_1').value
    const candidato2 = document.getElementById('candidato_2').value
    const candidato3 = document.getElementById('candidato_3').value
    const candidato4 = document.getElementById('candidato_4').value

    const resultado = document.getElementById('div_resultado')
    const resultadoGov = document.getElementById('div_resultadogov')

    const votos1 = parseFloat(document.getElementById('votos_1').value)
    const votos2 = parseFloat(document.getElementById('votos_2').value)
    const votos3 = parseFloat(document.getElementById('votos_3').value)
    const votos4 = parseFloat(document.getElementById('votos_4').value)

    if(votos1>votos2 && votos1>votos3&&votos1>votos4){
        resultado.innerText = candidato1 + ' foi eleito a governador'
    }else if(votos2>votos3 && votos2>votos1&&votos2>votos4){
        resultado.innerText = candidato2 + ' foi eleito a governador'
    }else if(votos3>votos2 && votos3>votos1&&votos3>votos4){
        resultado.innerText = candidato3 + ' foi eleito a governador'
    }else if(votos4>votos3 && votos4>votos2&&votos4>votos1){
        resultado.innerText = candidato4 + ' foi eleito a governador'
    }
    
    if(votos1<votos2 && votos1>votos3&&votos1>votos4){
        resultadoGov.innerText = candidato1 + ' foi eleito a vice governador'
    }else if(votos2<votos3 && votos2>votos1&&votos2>votos4){
        resultadoGov.innerText = candidato2 + ' foi eleito a vice governador'
    }else if(votos3<votos2 && votos3>votos1&&votos3>votos4){
        resultadoGov.innerText = candidato3 + ' foi eleito a vice governador'
    }else if(votos4<votos3 && votos4>votos2&&votos4>votos1){
        resultadoGov.innerText = candidato4 + ' foi eleito a vice governador'
    }else if(votos1>votos2 && votos1<votos3&&votos1>votos4){
        resultadoGov.innerText = candidato1 + ' foi eleito a vice governador'
    }else if(votos2>votos3 && votos2<votos1&&votos2>votos4){
        resultadoGov.innerText = candidato2 + ' foi eleito a vice governador'
    }else if(votos3>votos2 && votos3<votos1&&votos3>votos4){
        resultadoGov.innerText = candidato3 + ' foi eleito a vice governador'
    }else if(votos4>votos3 && votos4<votos2&&votos4>votos1){
        resultadoGov.innerText = candidato4 + ' foi eleito a vice governador'
    }else if(votos1>votos2 && votos1>votos3&&votos1<votos4){
        resultadoGov.innerText = candidato1 + ' foi eleito a vice governador'
    }else if(votos2>votos3 && votos2>votos1&&votos2<votos4){
        resultadoGov.innerText = candidato2 + ' foi eleito a vice governador'
    }else if(votos3>votos2 && votos3>votos1&&votos3<votos4){
        resultadoGov.innerText = candidato3 + ' foi eleito a vice governador'
    }else if(votos4>votos3 && votos4>votos2&&votos4<votos1){
        resultadoGov.innerText = candidato4 + ' foi eleito a vice governador'
    }
}