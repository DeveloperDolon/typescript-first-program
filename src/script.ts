

const main = (param: string) => {
    console.log("Hello world!", param);
}

const person = {
    name: "Dolon Chandra",
    age: 35,
    isDeveloper: true
}
main("Dolon")
const roll: number = 45;

// typescript array typing 

let a: (number | string)[] = [];

a.push(5);
a.push("Hello dolon!");

console.log(a);