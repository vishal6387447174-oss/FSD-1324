function calc(a,b,operation){
    return operation(a+b);
}

function add(x,y){
    return x+y;
}
console.log(calc(10,20,add));
function multiply(x,y){
    return x*y;
}

