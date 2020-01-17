const express = require('express')
const readData = require('./src/readData.js')

const app = express()

app.use(express.json())

app.get('/elements/:num', (req,res) => {
    const atomicNum = req.params.num

    const result = readData.getProperties(atomicNum)
    if(!result){
        res.status(404).send()
    }
    res.send(result)
    // console.log(typeof getProperties)
})

app.listen(3000,() => {
    console.log('App is running on port 3000')
})