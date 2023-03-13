let x = 10;
/*
* Variables defined with let cannot be redeclared.
* You cannot accidentally redeclare a variable.
let x = 20;
*/
console.log(x);
{
    // Let doesn't works in block scope
    let x = 2;
}
console.log(x);
var y = "Kukuh";
var y = "Tomo";
console.log(y);
{
    // Var is worked in block scope
    var y = "KukuhPx";
}
console.log(y);