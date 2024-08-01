export class MyDate{
  year: number;   // Hay que inicializar la variable
  month: number;
  day: number;

  constructor(year: number, month: number, day: number){
    this.year = year; // Aca le decimos que la variable se inicializa desde el constructor
    this.month = month;
    this.day = day;
  }

  printFormat(): string{
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'year'|'month'|'days'){
    if (type ==='days'){
      this.day += amount;
    }
    if (type ==='month'){
      this.month += amount;
    }
    if (type ==='year'){
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1994,9,23);
console.log(myDate.printFormat());
myDate.add(3,'month')
console.log(myDate.printFormat());
myDate.add(3,'days')
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
