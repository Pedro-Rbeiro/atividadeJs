let usernames = ["Miguel Chuteira","chuteira","Tejas Mere"]
let emails = ["nickolad.ng@outlook.com","psycho7k.pdro@gmail.com","lucas.ld@gmail.com"]
let passwords = ["nickolas123","urubu100","n3twork04"]

function login(){
    let email = document.getElementById("id_email").value

    let password = document.getElementById("id_password").value
    let username = document.getElementById("id_username").value
    const divImages = document.getElementById("images")
    let auth = false
    let authUsername =""
    for(let i = 0; i<emails.length;i++){
        if (username == usernames[i]){
            if(email == emails[i]){
                if(password == passwords[i]){
                    authUsername = usernames[i]
                    console.log(authUsername)
                    auth=true
                }
            }
        }
    }
    switch (authUsername) {
        case "Miguel Chuteira":
            divImages.innerHTML=`<img src="img/1.jfif"</img>`
            break;
        case "chuteira":
            divImages.innerHTML=`<img src="img/2.jfif"</img>`
            break
        case "Tejas Mere":
            divImages.innerHTML=`<img src="img/3.jfif"</img>`
            break
        default:
            break;
    }
    if(auth){
        alert("bem vindo")
    }else{
        alert("Email ou senha incorretos")
    }
}