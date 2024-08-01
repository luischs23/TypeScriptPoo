export class Animal{
  constructor(public name: string){}

  move(){
    console.log('Moving along!');
  }

  greeting(){
    return `Hello, i'm ${this.name}`;
  }
}

export class Dog extends Animal{

  constructor(
    name: string, // Aqui heredamos de Animal el name
    public owner: string){
      super(name); // Aqui llamamos la propiedad name de Animal
  }

  woof(times: number): void{
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

const firulays = new Animal('Fifi');
firulays.move();
console.log(firulays.greeting());

const cheis = new Dog('cheis','Luis');
cheis.move();
console.log(cheis.greeting());
cheis.woof(2);
console.log(cheis.owner)
