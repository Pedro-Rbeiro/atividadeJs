const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;
const app = express();
let musica = []
let id = 0
const musicas = [
    {
        nome: 'Highway to hell',
        artista: 'AC/DC',
        album: 'Highway to Hell',
        anoLancamento: 1979
    },
    {
        nome: "Sweet Child O' Mine",
        artista: "Guns N' Roses",
        album: 'Appetite For Destruction',
        anoLancamento: 1987
    },
    {
        nome: "It's So Easy",
        artista: "Guns N' Roses",
        album: 'Appetite For Destruction',
        anoLancamento: 1987
    },
    {
        nome: 'Murder on My Mind',
        artista: 'YNW Melly',
        album: 'I AM YOU',
        anoLancamento: 2018
    },
    {
        nome: 'RISK TAKER',
        artista: 'YNW Melly',
        album: 'I AM YOU',
        anoLancamento: 2018
    },
]
app.engine("handlebars", exphbs.engine());

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"));
app.set("view engine", "handlebars");

app.use(express.json())

app.post('/cadastrar/enviar', (req, res) => {
    let result = Object.entries(req.body)
    musica.push(result)
})

app.post('/search/enviar', (req,res)=>{
    console.log(req.body)
})
app.get("/", (req, res) => {
    const auth = true;
    res.render("home", { layout: false, auth0 });
});

app.get('/musicas', (req, res) => {
    res.render('musicas', { musicas, layout: false })
})

app.get('/cadastrar', (req, res) => {
    res.render('cadastrar', { layout: false })
})


app.get('/search',(req,res)=>{
    res.render('search',{layout:false})
})


app.get('/musica/:id',(req,res)=>{
    musicaEscolhida = musicas[req.params.id]
    res.render('search', {musicaEscolhida, layout:false})
})

app.get('/musica', (req, res) => {
    res.render('musica', { layout: false, musica })
})


app.listen(port, () => {
    console.log(port)
})