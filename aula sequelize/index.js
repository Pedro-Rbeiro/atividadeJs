const express = require('express');
const port = 3000;
const exphbs = require('express-handlebars')
const app = express();
const conn = require('./db/conn')
const User = require('./models/User');
const { raw } = require('mysql2');
//BODY
app.use(
    express.urlencoded({
        extended: true,
    }),
)
// importar JSON
app.use(express.json());

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

// construção das handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//css
app.use(express.static('public'))

app.get('/', async (req, res) => {
    const users = await User.findAll({raw: true})
    res.render('home', {users})

})
app.get('/users/cadastrar',(req,res)=>{
    res.render('addUser')
})
app.post('/users/create', async (req,res)=>{
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    const ocupacao = req.body.ocupacao
    let alertas = req.body.alerta
    if (nome == '' || email == '' || senha == '' || ocupacao == '') {
        return res.send("<script> alert('Preencha todos os campos'); window.location.replace('/users/cadastrar')</script>")
    }
    alertas == 'on' ? alertas = true : alertas = false 
    await User.create({nome,email,senha,ocupacao,alertas})

    res.redirect('/')

})
app.get('/users/:id', async (req,res)=>{
    const id = parseInt(req.params.id)

    const userData = await User.findOne({where: id, raw: true})
    res.render('user', {userData})
})
app.post('/users/delete/:id', async (req,res) => {
    const id = parseInt(req.params.id)

    User.destroy({where: {id: id}})
    res.redirect('/')

})
app.use((req, res) => {
    res.status(404).render("404");
})

conn.sync().then(() =>{
    app.listen(3000)
}).catch((err) =>{
    console.log(err)
})
