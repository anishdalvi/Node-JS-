const fs = require("fs")


function readFileP(filename, options){
    return fs.readFile(filename, options, (error, data) => {
        if(error) throw error
        
    })
}