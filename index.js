require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')

const cors = require('cors')
const saintsRouter = require('./src/api/routes/saints')
const taizenRouter = require('./src/api/routes/taizen')
const app = express()

// con express.json lo que estamos haciendo es configurar nuestro servidor para que sea capaz de recibir datos en formato json
app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/v1/taizen', taizenRouter)
app.use('/api/v1/saints', saintsRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, (req, res, next) => {
  console.log('Servidor levantado en:http://localhost:3000 🤖')
})
