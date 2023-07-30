// function someDec(){
//     console.log("First Console ", num); // undefined

//     var num = 100;

//     console.log("Second Console ", num); // 100

// }

// someDec()



// NO Hoisting when let is used

// function someDec(){
//     console.log("First Console ", num); // undefined

//     let num = 100;

//     console.log("Second Console ", num); // 100

// }
// someDec()



// Using try and catch block

// function someDec(){
//     try {
//         console.log("First Console ", num); // undefined

//         let num = 100;

//         console.log("Second Console ", num); // 100
//     } catch (error) {
//         console.log(error.toString());
//     }

// }

// someDec()


// Using const

function someDec(){
    try {
        console.log("First Console ", num); // undefined

        const num = 100;

        console.log("Second Console ", num); // 100
    } catch (error) {
        console.log(error.toString());
    }

}
    
    someDec()



