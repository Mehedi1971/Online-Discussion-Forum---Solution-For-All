const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/connecte'

const app = express()

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true })
const con = mongoose.connection

con.on('open', () => {
  console.log('connecting.....')
})

app.use(express.json())

const connecteRouter = require('./routers/connecte')
app.use('/connecte', connecteRouter)

app.listen(8000, () => {
  console.log('server started')
})
