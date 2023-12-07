import { Person } from "./classes/Player.js";
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
// userDetails("464alskdfjoi4",dolon);
// sayHello(dolon);
// typescript function signatures 
let add;
add = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
let userInfos;
userInfos = (id, userInfo) => {
    return 4;
};
// console.log(add(45, 34, "d"));
// typescript class type
// class Player {
//     private name: string;
//     private age: number;
//     readonly country: string;
//     constructor(name: string, age: number, country: string) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }
//     play() {
//         console.log(`${this.name} from ${this.country} is playing!`);
//     }
// }
// access modifire typescript
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const dola = new Player("Dolon", 23, "Bangladesh");
// dola.play();
// typescript module learning
const dolonr = new Person("Dolon Roy", 22, "Bangladesh");
dolonr.play();
const drawRectangle = (options) => {
    let width = options.width;
    let length = options.length;
    console.log(width, length);
};
let ThreeDOptions = {
    width: 30,
    length: 40,
    height: 50
};
drawRectangle(ThreeDOptions);
// according to class
let akash;
akash = new Person("Akash", 23, "Bangladesh");
akash.play();
