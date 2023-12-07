// typescript module learning
export class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
