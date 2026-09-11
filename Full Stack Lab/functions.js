//arrow function
 const add=(a,b)=>{
    return a+b;
 }
 console.log(add(10,20));
 
 //Default parameter function
 const subtract=()=>{
   
 }

 //Callback function
 function display(result)//child
 {
   console.log(result);
 }
 function cal(a,b,callback)//parent
 {
   callback(a+b);
 }
cal(10,20,display);