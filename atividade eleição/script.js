// desenvolvido por Pedro R.
function calculo() {

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

    let eleitores = [
        {
            candidato: candidato1,
            votos: votos1
        },
        {
            candidato: candidato2,
            votos: votos2
        },
        {
            candidato: candidato3,
            votos: votos3
        },
        {
            candidato: candidato4,
            votos: votos4
        }
    ]
    eleitores.sort((a, b) => { return a.votos - b.votos })
    eleitores.forEach((e) => {

        console.log(`${e.candidato} ${e.votos}`)
    })
    for (i = 0; i < eleitores.length; i++) {
        if (eleitores[i].candidato === '') {
            alert(`Insira os dados corretamente! Problema no eleitor ${i + 1}`)
            return
        }
    }

    resultado.innerText = `${eleitores[3].candidato} foi eleito a governador`
    resultadoGov.innerText = `${eleitores[2].candidato} foi eleito a vice governador`

    //     if(votos1>votos2 && votos1>votos3&&votos1>votos4){
    //         resultado.innerText = candidato1 + ' foi eleito a governador'
    //     }else if(votos2>votos3 && votos2>votos1&&votos2>votos4){
    //         resultado.innerText = candidato2 + ' foi eleito a governador'
    //     }else if(votos3>votos2 && votos3>votos1&&votos3>votos4){
    //         resultado.innerText = candidato3 + ' foi eleito a governador'
    //     }else if(votos4>votos3 && votos4>votos2&&votos4>votos1){
    //         resultado.innerText = candidato4 + ' foi eleito a governador'
    //     }

    //     if(votos1<votos2 && votos1>votos3&&votos1>votos4){
    //         resultadoGov.innerText = candidato1 + ' foi eleito a vice governador'
    //     }else if(votos2<votos3 && votos2>votos1&&votos2>votos4){
    //         resultadoGov.innerText = candidato2 + ' foi eleito a vice governador'
    //     }else if(votos3<votos2 && votos3>votos1&&votos3>votos4){
    //         resultadoGov.innerText = candidato3 + ' foi eleito a vice governador'
    //     }else if(votos4<votos3 && votos4>votos2&&votos4>votos1){
    //         resultadoGov.innerText = candidato4 + ' foi eleito a vice governador'
    //     }else if(votos1>votos2 && votos1<votos3&&votos1>votos4){
    //         resultadoGov.innerText = candidato1 + ' foi eleito a vice governador'
    //     }else if(votos2>votos3 && votos2<votos1&&votos2>votos4){
    //         resultadoGov.innerText = candidato2 + ' foi eleito a vice governador'
    //     }else if(votos3>votos2 && votos3<votos1&&votos3>votos4){
    //         resultadoGov.innerText = candidato3 + ' foi eleito a vice governador'
    //     }else if(votos4>votos3 && votos4<votos2&&votos4>votos1){
    //         resultadoGov.innerText = candidato4 + ' foi eleito a vice governador'
    //     }else if(votos1>votos2 && votos1>votos3&&votos1<votos4){
    //         resultadoGov.innerText = candidato1 + ' foi eleito a vice governador'
    //     }else if(votos2>votos3 && votos2>votos1&&votos2<votos4){
    //         resultadoGov.innerText = candidato2 + ' foi eleito a vice governador'
    //     }else if(votos3>votos2 && votos3>votos1&&votos3<votos4){
    //         resultadoGov.innerText = candidato3 + ' foi eleito a vice governador'
    //     }else if(votos4>votos3 && votos4>votos2&&votos4<votos1){
    //         resultadoGov.innerText = candidato4 + ' foi eleito a vice governador'
    //     }
}