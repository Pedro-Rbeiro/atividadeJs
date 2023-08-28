const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;
const app = express();

app.engine("handlebars", exphbs.engine());

app.use(express.static("public"));
app.set("view engine", "handlebars");


app.get("/", (req, res) => {
    const auth = true;

    res.render("home", { auth });
});

app.get("/gatos", (req, res) => {
    const gatos = [
        {
            nome: "Julia",
            idade: 2,
            dono: "Jonathan",
        },
        {
            nome: "Sujo",
            idade: 22,
            dono: "psycho7k",
        },
        {
            nome: "Cleber",
            idade: 6,
            dono: "Flavio",
        },
        {
            nome: "Miguel",
            idade: 5,
            dono: "Jonathan",
        }

    ]

    res.render("gatos", { gatos });
});

app.listen(port, () => {
    console.log(`Rondando na porta ${port}`);
});
