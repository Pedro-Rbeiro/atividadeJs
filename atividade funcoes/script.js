let emails = ["nickolas.ng","Cario.sp","paulo.ri","kaua.ph"]
let senhas = ["nick","caio","paulo", "kaua"]
function login(){
    const emailInput = document.getElementById("email").value
    const senhaInput = document.getElementById("password").value
    auth = validarDados(emailInput,senhaInput)
    if (auth){
        window.open("./page2.html",'_self')
    }else{                 
        alert("Usuario não encontrado")
    }
    console.log(auth)
    function validarDados(email,senha){
        console.log(email,senha)
        for(i=0; i<emails.length; i++){
            if(emails[i]==email && senhas[i]==senha){
                    return true
            }
        }
    }
}
