function comprar(){
    const item1 = document.getElementById("id_produto1").value
    const item2 = document.getElementById("id_produto2")
    const item3 = document.getElementById("id_produto3")
    const item4 = document.getElementById("id_produto4")
    const item5 = document.getElementById("id_produto5")
    let valorTotal = 0.0
    console.log(item1)
    switch (item1) {
        case "pao":
            valorTotal += 5.0
            alert(valorTotal)
            break;
    
        default:
            break;
    }
}