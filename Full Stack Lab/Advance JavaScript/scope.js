//Global scope
let s=10;
function func(){
   console.log(s);
}
func();

//Function scope
function k(){
    let x=10;
    console.log(x);
}
k();

//Block scope
if(true){
    let x=10;
    let y=20;

    console.log(x);
    console.log(y);
}

//hosting
console.log(name);
var name="rohan";

//TDZ start
let age=20;
//TDZ end
console.log(age);
//The period between a scope of initializing and declaring is called TDZ(Temporary Dead Zone)

//closure
//inner function will always remember all the variables of outer function even if the outer function ended.
function outer(){
    let counter=0;
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner();

}

let i=outer();
i++;