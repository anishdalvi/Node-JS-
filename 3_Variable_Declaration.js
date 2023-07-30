function someDec(){

    var num = 10;

    function someOther(){
        num  = num + num;
        console.log("Inner Some Other ", num);
    }
    
    console.log("\n Outer Some Desc ", num);
    
    return someOther
}

const some = someDec()
some()