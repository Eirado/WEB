const express  = require('express');
const calc     = require('./util/calculadora');
const estoque = require('./util/estoque');
const app      = express();

app.get('/', function (req, res) {
    res.send('Calculadora - página inicial');
});

app.get('/somar/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.somar(a, b);
    res.send(""+c);
});

app.get('/subtrair/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.subtrair(a, b);
    res.send(""+c);
});

app.get('/multiplicar/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.multiplicar(a, b);
    res.send(""+c);
});

app.get('/dividir/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calc.dividir(a, b);
    res.send(""+c);
});

app.get("/api/adicionar/:id/:nome/:qtd", function(req, res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;

    let p = estoque.criar_produto(id, nome, qtd);
    estoque.adicionar_produto(p);
    res.json(p);
});

app.get("/api/listar", function (req, res) {
    res.json(estoque.listar_produtos());
});

app.get("/api/editar/:id/:qtdAtual", function (req, res) {
    let id = req.params.id;
    let qtdAtual = req.params.qtdAtual;
    res.json(estoque.editar_produto(id, qtdAtual));
});

app.get("/api/remover/:id", function (req, res) {
    let id = req.params.id;
    res.json(estoque.remover_produto(id));
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});

