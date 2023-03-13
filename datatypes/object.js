// Data
// An object
let my = {
    name: "Kukuh",
    age: 25,
    speak: function() {
        return "I'm speaking";
    },
    move: function(){}
};
// An array
let familyMember = ["Dessy", "Kukuh", "Hadi"];
let familyBirthDate = [1991, 1996, 2002];
// A date
let d = new Date().getFullYear();
// Program
console.log("My name is " + my.name);
console.log("My age is " + my.age);
console.log(my.speak());
console.log(my.move());
console.log("The second childern's name is " + familyMember[1]);
console.log("His birth date is " + familyBirthDate[1]);
console.log("Now is " + d);