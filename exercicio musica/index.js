const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;
const app = express();
let musicas = []
app.engine("handlebars", exphbs.engine());

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"));
app.set("view engine", "handlebars");

app.use(express.json())
app.get("/", (req, res) => {
    const auth = true;
    res.render("home", { layout:false, auth });
});
app.get('/musicas', (req, res) => {
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
        },        {
            nome: 'RISK TAKER',
            artista: 'YNW Melly',
            album: 'I AM YOU',
            anoLancamento: 2018
        },
    ]
    res.render('musicas', {musicas, layout: false})
})
app.get('/cadastrar',(req,res)=>{
    res.render('cadastrar', {layout:false})
})
app.post('/cadastrar/enviar',(req,res) =>{
    let result = Object.entries(req.body)
    musicas.push(result)
    console.log('Array' + musicas)
    console.log(req.body)
})
app.get('/musica', (req, res) => {
    res.render('musica',{layout: false, musicas})
})
app.listen(port, () => {
    console.log(port)
})