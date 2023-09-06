const express = require('express');
const port = 3000;
const exphbs = require('express-handlebars')
const app = express();
const mysql = require('./db.js')


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

app.get('/', (req, res) => {
    con.execute(`SELECT * FROM jogos`, (err, query) => {
        // console.log(err)
        console.log(query.length)
        queryLength = query.length

        res.render('home', { query, queryLength })
    })

})

app.get('/sites/:id', (req, res) => {
    con.execute((`SELECT * FROM jogos
    WHERE id=${parseInt(req.params.id)}`), (err, query) => {
        const selectedSite = query[0]
        console.log(selectedSite.nome);
        res.render("site", { choicedSite: selectedSite });
    })

})


app.use((req, res) => {
    res.status(404).render("404");
})


app.listen(port, () => {
    console.log("Projeto funcionando, acesse localhost:" + port);
})
