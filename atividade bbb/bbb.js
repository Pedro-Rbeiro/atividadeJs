// desenvolvido por Pedro R.
function calculo(){
    const candidato1 = document.getElementById('candidato_1').value
    const candidato2 = document.getElementById('candidato_2').value
    const candidato3 = document.getElementById('candidato_3').value

    const votos1 = parseFloat(document.getElementById('votos_1').value)
    const votos2 = parseFloat(document.getElementById('votos_2').value)
    const votos3 = parseFloat(document.getElementById('votos_3').value)

    if(votos1<votos2 && votos1<votos3){
        alert(candidato1 + ' você teve '+ votos1 + " votos por conta disso você está no paredão")
    }else if(votos2<votos3 && votos2<votos1){
        alert(candidato2 + ' você teve '+ votos2 + " votos por conta disso você está no paredão")
    }else if(votos3<votos2 && votos3<votos1){
        alert(candidato3 + ' você teve '+ votos3 + " votos por conta disso você está no paredão")
    }
}