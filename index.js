const express = require('express')
const pg = require('pg')

const { Pool } = pg

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user:  'postgress',
    password: 'admin123',
    database: 'avanti'
})

const app = express()

app.use(express.json())

app.get('/alunos', async (request,response) => {
    const clientes =  await pool.query("select * from clientes")
    const alunos = [
        {nome: "Cairo", idade : 25},
        {nome: "Breno", idade : 27},
        {nome: "Caroline", idade : 22}
    ]
    response.status(200).json(clientes.rows)
})

app.listen(3001, () => {
    console.log("Runnung serve ")
})