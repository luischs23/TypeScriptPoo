const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993,2,12); // 0 = enero, 11 = Dic
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

let myVar;

export class MyDate{
  year: number;   // Hay que inicializar la variable
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year; // Aca le decimos que la variable se inicializa desde el constructor
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2021,3,13);
console.log(myDate);

