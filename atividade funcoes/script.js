let emails = ["nickolas.ng","Cario.sp","paulo.ri","kaua.ph"]
let senhas = ["nick","caio","paulo", "kaua"]
function login(){
    const emailInput = document.getElementById("email").value
    const senhaInput = document.getElementById("password").value
    let auth = false
    validarDados(emailInput,senhaInput)
    console.log(auth)
    function validarDados(email,senha){
        console.log(email,senha)
        for(i=0; i<emails.length; i++){
            if(emails[i]==email){
                if(senhas[i]==senha){
                    auth = true
                }
            }
        }
        auth? alert("bem vindo") : alert("não te conheço")
    }
}
