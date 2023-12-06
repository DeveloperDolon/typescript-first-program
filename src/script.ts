

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
// myFunc("Dolon", "Akash", "Turna");


// typescript type aliases

type stringOrNumber = string | number;
type userType = {name: string; age: number};


const userDetails = (id: stringOrNumber, user: userType) => {
    console.log(`User id ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? "Sir:" : "Mr."} ${user.name}`);
}

const dolon = {
    name: 'dolon',
    age: 23
}



// userDetails("464alskdfjoi4",dolon);
// sayHello(dolon);

// typescript function signatures 

let add: (x: number, y: number, c:string) => number;

add = (a:number, b:number, c:string) => {
    if(c === "add") {
        return a+b;
    } else {
        return a-b;
    }
}

let userInfos : (id: number |  string, userInfo: {
    name: string,
    age: number
}) => number;

userInfos = (id: number | string, userInfo: {
    name: string,
    age: number
}) => {
    return 4;
}

console.log(add(45, 34, "d"));