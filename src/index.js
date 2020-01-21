const path = require('path')
const express = require('express')
const readData = require('./utils/readData.js')

const app = express()
const port = process.env.PORT || 3000;

//Path for public and views directory
const publicDir = path.join(__dirname,"../public");

//To deliver public assets
app.use(express.static(publicDir));

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

app.listen(port,() => {
    console.log('App is running on port 3000')
})