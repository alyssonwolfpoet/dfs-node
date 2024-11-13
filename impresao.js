const express = require('express');
const app = express();

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Endpoint para receber e imprimir dados
app.post('/imprimir', (req, res) => {
    // Pegando os dados enviados no corpo da requisição
    const dados = req.body;

    // Imprimindo os dados no console
    console.log('Dados recebidos:', dados);

    // Respondendo com uma mensagem de sucesso
    res.status(200).json({ message: 'Dados recebidos com sucesso', dados: dados });
});

// Definindo a porta do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
