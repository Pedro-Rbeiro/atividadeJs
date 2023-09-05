const express = require('express');
const router = express.Router();
const exphbs = require('express-handlebars')
const app = express();
const mysql = require('../db.js')

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})


app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// ----------- endpoints --------------
router.get("/cadastrar", (req, res) => {

    res.render("cadastrarSite")
})

router.post("/salvar", (req, res) => {
    con.execute(`INSERT INTO jogos (nome, dificuldade)
    VALUES ("${req.body.nome}", "${req.body.dificulty}")`, (err, res) => { console.log(err ?? res) })
    console.log(req.body.dificulty)

})



module.exports = router;