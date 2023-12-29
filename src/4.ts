class Key{
    private signature: number;

    constructor(signature: number = Math.random()) {
        this.signature = signature;
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person{
    constructor(private key: Key){}

    getKey(): Key{
        return this.key;
    }
}

abstract class House{
    constructor(protected door: boolean, protected key: Key, protected tenants: Person[] = []){}

    comeIn(person: Person): void{
        if(this.door === true){
            this.tenants.push(person);
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House{
    constructor(key: Key){
        super(false, key);
    }
    openDoor(key: Key): void{
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
          } else {
            this.door = false;
          }
        }
    }


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};