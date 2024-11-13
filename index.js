const express = require('express')
const app = express()

app.use(express.json())

app.get('/alunos', async (request,response) => {

    const alunos = [
        {nome: "Cairo", idade : 25},
        {nome: "Breno", idade : 27},
        {nome: "Caroline", idade : 22}
    ]

    const url = 'http://localhost:3000/imprimir';
    const dados = {
    nome: 'Alysson',
    messege: 'oi jarom'
    };

    enviarRequisicaoPost(url, dados);
    response.status(200).json(alunos)
})

app.listen(3001, () => {
    console.log("Runnung serve ")
})



const request = require('request');

const enviarRequisicaoPost = (url, dados) => {
    request.post(
        {
            url: url,
            json: dados
        },
        (error, response, body) => {
            if (error) {
                console.error('Erro na requisição:', error);
            } else {
                //console.log('Resposta do servidor:', body);
            }
        }
    );
};


