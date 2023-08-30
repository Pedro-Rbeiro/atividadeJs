export default function () {
  let user = [
    {
      username: 'Miguel Chuteira',
      email: 'nickolad.ng@outlook.com',
      password: 'nickolas123',
      pfp: `<img src="img/1.jfif"</img>`
    },
    {
      username: 'chuteira',
      email: 'psycho7k.pdro@gmail.com',
      password: 'urubu100',
      pfp: `<img src="img/2.jfif"</img>`
    },
    {
      username: 'Tejas Mere',
      email: 'lucas.ld@gmail.com',
      password: 'n3twork04',
      pfp: `<img src="img/3.jfif"</img>`
    },
  ]
  let email = document.getElementById("id_email").value;
  let password = document.getElementById("id_password").value;
  let username = document.getElementById("id_username").value;
  const divImages = document.getElementById("images");
  let auth = false;
  let authUsername = "";
  for (let i = 0; i < user.length; i++) {
    if (username == user[i].username) {
      if (email == user[i].email) {
        if (password == user[i].password) {
          authUsername = user[i].username;
          divImages.innerHTML = user[i].pfp;
          console.log(authUsername);
          auth = true;
        }
      }
    }
  }
  if (auth) {
    alert("bem vindo");
  } else {
    alert("Email ou senha incorretos");
  }
}