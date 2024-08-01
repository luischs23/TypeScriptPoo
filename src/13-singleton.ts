export class MyService{

  static instance: MyService | null = null;

  private constructor(private name: string){}

  getname(){
    return this.name;
  }

  static create(name:string){
    if(MyService.instance === null){
      console.log("Deberia entrar una sola vez");
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('Service 1');
console.log(myService1.getname());
const myService2 = MyService.create('Service 1');
console.log(myService2.getname());

console.log(myService1===myService2);
