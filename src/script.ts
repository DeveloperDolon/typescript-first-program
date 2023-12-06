

const main = (param: string) => {
    console.log("Hello world!", param);
}

const person = {
    name: "Dolon Chandra",
    age: 35,
    isDeveloper: true
}
// main("Dolon")
const roll: number = 45;

// typescript array typing 

let a: (number | string)[] = []; // this called union type.

a.push(5);
a.push("Hello dolon!");

// console.log(a);

// typescript object typing

// let c: {
//     name: string,
//     age: number,
//     adult: boolean
// }

let c : object;

c = {
    name: "dolon",
    age: 52,
    adult: false
}

// console.log(c);


// typescript dynamically type

let d: any; //rare to use in typescript

d = "a;sldkfj";
d = 6;

// console.log(d); 

const myFunc = (a: string, b: string, c: string = "Bal"  ) => {
    console.log(`hello ${a} ${b} ${c}`);
}
myFunc("Dolon", "Akash", "Turna");
