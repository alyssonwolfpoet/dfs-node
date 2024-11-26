const express = require('express')
const pg = require('pg')

const app = express() 
const { Pool } = pg

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'admin123',
    database: 'avanti'
})

app.use(express.json())

app.get('/clientes', async (request,response) => {
   const clientes = await pool.query('SELECT * FROM clientes')
    return response.status(200).json(clientes.rows)
})

app.post('/cliente', async (request,response) => {
    const {nome, email, telefone } = request.body
    const clientes = await pool.query('INSERT INTO clientes(nome, email, telefone) VALUES ( $1, $2, $3)',[nome,email,telefone])
    return response.status(201).send()
}) 

app.put('/cliente/:id', async (request,response) => {
    const {nome, email, telefone } = request.body
    const {id} = request.params
    const clientes = await pool.query('UPDATE clientes SET nome = $1, email = $2, telefone = $3 WHERE id = $4',[nome,email,telefone,id])
    return response.status(200).send()
})

app.delete('/cliente/:id', async (request,response) => {
    const {id} = request.params

    const clientes = await pool.query('DELETE FROM clientes WHERE id = $1',[id])
    return response.status(204).send()
}) 

app.listen(3001, () => {
    console.log("Runnung serve ")
})