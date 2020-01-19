const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname,"../../db/PeriodicTableJSON.json")

const getProperties = (atomicNum,callback) => {
    fs.readFile(filePath,(error,data) => {
        if(error){
            return callback(undefined,error)
        }
        const content = JSON.parse(data).elements
        for(let i=0;i<content.length;i++){
            if(content[i].number == atomicNum){
                return callback(content[i],undefined);
            }
        }
        callback(undefined,undefined)
    })
}

module.exports = {
    getProperties
}