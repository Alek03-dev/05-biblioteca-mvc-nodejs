// Importar o módulo express
const express = require('express');

// Importar controller
const livroController = require('./controllers/livro.controller')

// Criar uma instância do express
const app = express();

// Configurar EJS como um mmotor de visualização
app.set('view engine', 'ejs')
app.set('views', './views')

// Rota para listar todos os livros
app.get('/livros', livroController.listarLivros)

// Configura a porta do servidor
app.listen(3000, function() {
    console.log("Servidor rodando com sucesso!")
})