const fsP = require("fs/promises")


// fsP.readFile("./sample.txt", { encoding : "utf-8" }).then((data) => {
//     console.log("Data ", data)
// })
// .catch((error) => {
//     console.log("Error ", error);
// })



// fsP.readFile("./sample.txt", { encoding : "utf-8" }).then((data) => {
//     console.log("Data ", data) // we should return this inorder to use this data to the next then
// }).then((resultData)=> { // for this then the previous then is the promise
//     console.log("Result Data", resultData);
// })
// .catch((error) => {
//     console.log("Error ", error);
// })


fsP.readFile("./sample.txt", { encoding : "utf-8" }).then((data) => {
    return data // we should return this inorder to use this data to the next then
}).then((resultData)=> { // for this then the previous then is the promise
    console.log("Result Data", resultData);
})
.catch((error) => {
    console.log("Error ", error);
})
