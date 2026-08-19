//var let const
//var
var name = "John"; 
name = "Doe"; 
console.log(name); 

var name = "Jane";
console.log(name);

//let
let age = 30;
console.log(age);
age = 31;
console.log(age);
//let age = 32; // This will throw an error because 'age' has already been declared

//const
//const name = "John";
//name = "Doe"; // This will throw an error because 'name' is a constant and cannot be reassigned
//const name = "Jane"; // This will throw an error because 'name' has already been declared

const student = {
    name: "John",
    age: 20
};

student.name = "Doe"; // This is allowed because we are modifying the properties of the object, not reassigning the variable
student.city = "New York"; // This is also allowed because we are adding a new property to the object

const fruits = ["apple", "banana", "orange"];
fruits.push("grape"); // This is allowed because we are modifying the contents of the array, not reassigning the variable
fruits[0] = "kiwi"; // This is also allowed because we are modifying the contents of the array
console.log(fruits); // Output: ["kiwi", "banana", "orange", "grape"]