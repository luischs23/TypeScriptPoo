import { Dog } from "./09-protected"

// function getValue(value: unknown){
//   return value;

// function getValue(value: string | number){
//   return value;
// }

function getValue<T>(value: T){
  const array: T[] = [value]
  return value;
  }

getValue<number>(12).toFixed();
getValue<string>('12').toLocaleLowerCase();
getValue<number[]>([1,2]).forEach;

const fifi = new Dog("Firulais", "Andres")
getValue<Dog>(fifi).greeting

// Promise<boolean>
// axios.get<string>
