export class MyDate{
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string{
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number){
    if(value < 10){
      return `0${value}`
    }
    return `${value}`
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

  getDay(){
    return this.day;
  }
}

const myDate = new MyDate(1994,9,3);
console.log(myDate.printFormat());
console.log(myDate.getDay());


