
function calcular(){
    const prof = document.getElementById("professor").value
    let profName = ""
    const classe = document.getElementById("classe").value
    let classeName = ""
    const diariaText = document.getElementById("preco-diaria")
    let valorAula = 0
    let dias = 0
    console.log(prof,classe)
    switch (prof) {
        case "1":
            profName = "Carlos"
            valorAula = 2
            break;
        case "2":
            profName = "Diego"
            valorAula = 5
            break;
        case "3":
            profName="Wagner"
            valorAula = 7
            break;
        default:
            alert("Selecione algum professor!")
            break;
    }
    switch (classe) {
        case "1":
            classeName = "1A"
            dias = 4
            break;
        case "2":
            classeName="2A"
            dias = 3
            break;
        case "3":
            classeName="3A"
            dias = 6
            break;
        default:
            alert("Selecione alguma classe!")
            break;
    }
    if(classe > 0){
    diaria = (dias * valorAula)
    diariaText.innerHTML=`
    <p>O preço da diaria do professor: ${profName} na sala ${classeName}  é de R$${diaria}</p>
    <p> O professor ${profName} recebe R$${valorAula} por aula com ${dias} aulas por dia
    `
    }else{
        return
    }
}