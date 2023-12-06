"use strict";
const main = (param) => {
    console.log("Hello world!", param);
};
const person = {
    name: "Dolon Chandra",
    age: 35,
    isDeveloper: true
};
// main("Dolon")
const roll = 45;
// typescript array typing 
let a = []; // this called union type.
a.push(5);
a.push("Hello dolon!");
// console.log(a);
// typescript object typing
// let c: {
//     name: string,
//     age: number,
//     adult: boolean
// }
let c;
c = {
    name: "dolon",
    age: 52,
    adult: false
};
// console.log(c);
// typescript dynamically type
let d; //rare to use in typescript
d = "a;sldkfj";
d = 6;
// console.log(d); 
const myFunc = (a, b, c = "Bal") => {
    console.log(`hello ${a} ${b} ${c}`);
};
const userDetails = (id, user) => {
    console.log(`User id ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir:" : "Mr."} ${user.name}`);
};
const dolon = {
    name: 'dolon',
    age: 23
};
userDetails("464alskdfjoi4", dolon);
sayHello(dolon);
