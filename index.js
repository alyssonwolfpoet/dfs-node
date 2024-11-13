const express = require('express')
const app = express()

app.use(express.json())

app.get('/alunos', async (request,response) => {

    const alunos = [
        {nome: "Cairo", idade : 25},
        {nome: "Breno", idade : 27},
        {nome: "Caroline", idade : 22}
    ]
    response.status(200).json(alunos)
})

app.listen(3001, () => {
    console.log("Runnung serve ")
})