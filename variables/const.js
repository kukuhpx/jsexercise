/*
* A const variable cannot be reassigned:
* const PI = 3.141592653589793;
* PI = 3.14;       This will give an error
* PI = PI + 10;    This will also give an error
*
* JavaScript const variables must be assigned a value when they are declared:
* Correct example
* const PI = 3.14159265359;
* Incorrect example
* const PI;
* PI = 3.14159265359;
*
* Always declare a variable with const when you know that the value should not be changed.
* Use const when you declare:
* A new Array
* A new Object
* A new Function
* A new RegExp
*/

// Const Arrays
const cars = ["Nissan, BMW, Toyota, Mitsubishi"];
// You can change an element of Arrays
cars[0] = "Datsun";
console.log(cars[0]);
/*
* But you can NOT reassign the array:
* const cars = ["Saab", "Volvo", "BMW"];
* cars = ["Toyota", "Volvo", "Audi"];    // ERROR
*/

// Const Object
const car = {brand:"BMW", color:"Blue", type:"MIII GTR"};
// You can change a property:
car.color = "Red";
// You can add a property:
car.owner = "Kukuh Prohastomo";
console.log("The color of car is " + car.color);
console.log("The owner of car is " + car.owner);

const x = 10;
{
    const x = 20;
    console.log(x)
}
console.log(x);
