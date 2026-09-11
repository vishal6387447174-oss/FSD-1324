//filter
let numbers=[1,2,3,4,5];
let even=numbers.filter(number=>{
    return number%2==0;
});
console.log(even);

//reduce-combining all the array in the single element
let num=[10,20,30,40,50];
let total=num.reduce((sum,number)=>{
    return sum+number;
},0);
console.log(total);
let maximum=num.reduce((max,number)=>{
    return number>max?number:max;
},num[0]);
console.log(maximum);
