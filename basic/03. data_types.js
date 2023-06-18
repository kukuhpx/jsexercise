//  Numbers
let weight = 7.5;
console.log(weight);
let a = 60;
let b = 180;
console.log("60 + 180 = " + a + b);
console.log("60 - 180 = " + a - b);
console.log("60 x 180 = " + a * b);
console.log("60 / 180 = " + a / b);
//  Strings
let color = "Yellow";
console.log(color);
let name = "Kukuh";
let address = "Jakarta";
console.log("My name is " + name);
console.log("My address is " + address);
//  Booleans
let x = true;
let y = false;
console.log(x);
console.log(y);
let t = true;
let f = false;
console.log("Yes is " + y);
console.log("No is " + n);
//  A single object:
const person = {firstName:"John", lastName:"Doe"};
console.log(person.firstName + " " + person.lastName);
let my = {
    name: "Kukuh",
    age: 25,
    speak: function() {
        return "I'm speaking";
    },
    move: function(){}
};
//  An array object
let familyMember = ["Dessy", "Kukuh", "Hadi"];
let familyBirthDate = [1991, 1996, 2002];
//  A date object
let d = new Date().getFullYear();
console.log("My name is " + my.name);
console.log("My age is " + my.age);
console.log(my.speak());
console.log(my.move());
console.log("The second childern's name is " + familyMember[1]);
console.log("His birth date is " + familyBirthDate[1]);
console.log("Now is " + d);
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
//  Creating a date
const date = new Date("2022-03-25");
console.log(date.getDate());