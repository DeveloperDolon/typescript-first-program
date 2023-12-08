import {Person} from "./classes/Player.js";
import {IsPlayer} from "./interfaces/isPlayer.js";

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

    constructor(
        private name: string,
        private age: number,
        readonly country: string
    ) {}

    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}

const dola = new Player("Dolon", 23, "Bangladesh");

// dola.play();


// typescript module learning
const dolonr = new Person("Dolon Roy", 22, "Bangladesh");
dolonr.play();



// typescript interfaces learning ..........
// according to object
interface RectangleOptions {
    width: number;
    length: number;
}

const drawRectangle = (options: RectangleOptions) => {
    let width = options.width;
    let length = options.length;
    console.log(width, length);
}

let ThreeDOptions = {
    width: 30,
    length: 40,
    height: 50
}

drawRectangle(ThreeDOptions);

// according to class
let akash: IsPlayer;
akash = new Person("Akash", 23, "Bangladesh" );
akash.play();


/// typescript generics learning
const addID =<T extends {
    name: string;
    age: number;
}> (obj: T) => {
    let id = Math.floor(Math.random() * 100);

    return {...obj, id};
} 

let user = addID({
    name: "Dolon Chandra Roy",
    age: 40,
    country: "Bangladesh"
});

let userDolon = "Dolon Roy";

// console.log(user);

interface APIResponse <T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIResponse<object> = {
    status: 200,
    type: "Good Request",
    data: {
        name: "Test name",
        something: 400
    }
}

// console.log(response1)


// typescript enum types learning
enum ResponseTypes {
    SUCCESS, FAILURE, UNAUTHENTICATED, ERROR
};

interface APIResponse2 <T> {
    status: number;
    type: ResponseTypes;
    data: T;
}

const response2: APIResponse2<string> = {
    status: 200,
    type: ResponseTypes.UNAUTHENTICATED,
    data: "test"
}
 
// console.log(response2)

// typescript tuples learning.............
let addb = [3, "hello", {p: 3}];

a[0] = "false";

let abb: [number, string, object] = [3, "Hello", {name: "Dolon"}];

console.log(abb[1]);