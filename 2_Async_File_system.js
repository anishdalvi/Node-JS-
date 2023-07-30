
const { error } = require('console');
const fs = require('fs')

console.log("First Console");

fs.readFile('./sample.txt', { encoding: "utf-8" }, (error, data) => {
    if(error) console.log("Error ", error);
    console.log("Second Console");
    console.log("Data ", data);
    
})

console.log("Third Console");

