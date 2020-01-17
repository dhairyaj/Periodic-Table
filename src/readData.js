const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname,"../db/PeriodicTableJSON.json")
// console.log(filePath)

const readContent = (callback) => {
    fs.readFile(filePath,(error,data) => {
        if(error){
            return callback(undefined,error)
        }
        callback(data,undefined)
    })
}

const getProperties = function (atomicNum) {
    readContent((data,error) => {
        if(error){
            throw error
        }
        const content = JSON.parse(data).elements
        for(let i=0;i<content.length;i++){
            if(content[i].number === atomicNum){
                return console.log(content[i]);
            }
        }
        return console.log({});
    })
}

// getProperties(1)

module.exports = getProperties