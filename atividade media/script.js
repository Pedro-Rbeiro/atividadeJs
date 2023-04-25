function calcular() {
    let n1 = parseFloat(document.getElementById('nota_1').value);
    let n2 = parseFloat(document.getElementById('nota_2').value);
    let n3 = parseFloat(document.getElementById('nota_3').value);
    let n4 = parseFloat(document.getElementById('nota_4').value);

    let soma = n1+n2+n3+n4
    let media = soma/4

    if(media < 6){
        div_resultado.innerHTML = `
        <h3 style="color: red;">Sua media foi ${media}, Então foi Reprovado</h3>
        `
        alert("Poxa que pena, tente de novo proximo ano")
    }else if(media >= 6){
        div_resultado.innerHTML = `
        <h3 style="color: green;">Sua media foi ${media}, Então foi Aprovado</h3>
        `
        alert("Parabens!!!, Você passou")
    }
}