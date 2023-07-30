function someDec(){

    var num = 50;

    function someOther(){
        num  = num + num;
        console.log("Inner Some Other ", num);
    }
    
    console.log("Outer Some Desc ", num);
    
    return someOther
}

const some = someDec()
some()