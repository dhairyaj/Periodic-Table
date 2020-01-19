const express = require('express')
const readData = require('./src/readData.js')

const app = express()

app.use(express.json())

app.get('/elements/:num', (req,res) => {
    const atomicNum = req.params.num

    readData.getProperties(atomicNum,(data,error) => {
        if(error){
            res.status(500).send()
        }
        if(!data){
            res.status(404).send()
        }
        res.send(data)
    })
})

app.listen(3000,() => {
    console.log('App is running on port 3000')
})