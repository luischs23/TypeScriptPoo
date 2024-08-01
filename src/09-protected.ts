export abstract class Animal{
  constructor(public name: string){}

  move(){
    console.log('Moving along!');
  }

  greeting(){
    return `Hello, i'm ${this.name}`;
  }

  protected doSomething(){
    console.log('Doing something...');
  };
}

export class Dog extends Animal{

  constructor(
    name: string, // Aqui heredamos de Animal el name
    public owner: string){
      super(name); // Aqui llamamos la propiedad name de Animal
  }

  woof(times: number): void{
    for (let index = 0; index < times; index++) {
      console.log(`woof ${this.name}`);
    }
    this.doSomething();
  }

  move(){
    console.log('Moving as a dog');
    super.move();
  }
}


const cheis = new Dog('cheis','Luis');
cheis.woof(1);
// cheis.doSomething( );
