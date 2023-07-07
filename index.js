const express = require('express')
const app = express()
const cors = require('cors')
const movies = require('./modal/data.json')

app.use(cors())

app.get('/get', (req, res)=>{
    res.json(movies)
})

app.listen('4400', ()=>{
    console.log("SERVER IS RUNNING")
})


