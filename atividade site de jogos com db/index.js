const express = require('express');
const port = 3000;
const exphbs = require('express-handlebars')
const app = express();

const mysql = require('mysql2')
const con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "google_db"
    }
)
con.connect((err) => {
    if (err) {
        console.log("algo deu errado");
    } else {
        console.log("conexão bem sucedida");
    }

})

const sites = require('./sites')
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


app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))


app.use("/sites", sites);

const site = [
    {
        id: 1,
        nome: "Futebol",
        dificuldade: "Dificil"
    },
    {
        id: 2,
        nome: "Corrida de Cavalos",
        dificuldade: "Dificil"
    },
    {
        id: 3,
        nome: "Crash",
        dificuldade: "Médio"
    },
    {
        id: 4,
        nome: "Mines",
        dificuldade: "Facil"
    },
]

app.get('/', (req, res) => {
    con.execute(`SELECT * FROM jogos`, (err, query)=>{
        // console.log(err)
        console.log(query.length)
        queryLength = query.length
        if(!query.length){
            console.log('foi')
        }
        res.render('home', { query, queryLength })
    })

})

app.get('/sites/:id', (req, res) => {
    const selectedSite = site[parseInt(req.params.id) - 1];
    console.log(selectedSite);
    res.render("site", { choicedMusic: selectedSite });
})


app.use((req, res) => {
    res.status(404).render("404");
})


app.listen(port, () => {
    console.log("Projeto funcionando, acesse localhost:" + port);
})
