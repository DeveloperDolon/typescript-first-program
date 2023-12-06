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
console.log(d);
