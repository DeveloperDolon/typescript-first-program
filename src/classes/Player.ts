import {IsPlayer} from "../interfaces/isPlayer.js";

// typescript module learning

export class Person implements IsPlayer {

    constructor(
        public name: string,
        private age: number,
        readonly country: string
    ) {}

    getAge() {
        return this.age;
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}


