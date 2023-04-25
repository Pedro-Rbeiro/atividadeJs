function calcular(){
    const n1 = parseFloat(document.getElementById('value_1').value)
    const n2 = parseFloat(document.getElementById('value_2').value)
    const n3 = parseFloat( document.getElementById('value_3').value)
    const n4 = parseFloat(document.getElementById('value_4').value)
    
    let soma = n1+n2+n3+n4
    let media = soma/4
    console.log(media)
}