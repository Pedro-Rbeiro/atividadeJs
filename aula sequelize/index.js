const express = require('express');
const port = 3000;
const exphbs = require('express-handlebars')
const app = express();
const conn = require('./db/conn')
const User = require('./models/User');
const Experiences = require('./models/Xp')
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
app.get('/users/update/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    
    const user = await User.findOne({where: id, raw: true});

    res.render('attUser', { user });
});

app.post('/users/update/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const ocupacao = req.body.ocupacao;
    let alertas = req.body.alerta;

    alertas == "on" ? (alertas = true) : (alertas = false);

    if (email.includes(".com") == false) {
        return res.send("<script>alert('Está faltando '.com' no email'); window.location.replace('/users/cadastrar')</script>")
    }

    if (nome == "" || email == "" || senha == "" || ocupacao == "" ) {
        return res.send("<script>alert('Preencha todos os dados'); window.location.replace('/users/cadastrar')</script>")
    }

    const user = {
        nome,
        email,
        senha,
        ocupacao
    }

    await User.update(user , {where: {id: id}});

    res.redirect('/')
})
app.get('/users/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    const xp = await Experiences.findAll({where: {UserId: id}, raw: true})
    const userData = await User.findOne({where: id, raw: true})
    res.render('user', {userData,xp})
})
app.post('/users/delete/:id', async (req,res) => {
    const id = parseInt(req.params.id)

    User.destroy({where: {id: id}})
    res.redirect('/')
})
app.get('/users/register-adress/:id', async (req, res) =>{
    const id = parseInt(req.params.id)
    console.log(id);
    res.render('addExp', {id} )
    
})

app.post('/register-adress/create/:id', async (req, res) =>{
    const empresa = req.body.empresa
    const cargo = req.body.cargo
    const descricao = req.body.descricao
    const UserId = req.params.id

    await Experiences.create({empresa, cargo, descricao, UserId})

    res.redirect('/')
})
app.use((req, res) => {
    res.status(404).render("404");
})

conn.sync({force:true}).then(() =>{
    app.listen(3000)
}).catch((err) =>{
    console.log(err)
})
