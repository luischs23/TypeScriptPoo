export class MyDate{

  constructor(
    public year: number = 2000 ,
    public month: number = 1,
    private _day: number = 28){}

  printFormat(): string{
    const day = this.addPadding(this._day)
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
      this._day += amount;
    }
    if (type ==='month'){
      this.month += amount;
    }
    if (type ==='year'){
      this.year += amount;
    }
  }

  get day(){
    return this._day;
  }

  get isLeapYear(): boolean{
      if (this.year % 400 === 0) return true;
      if (this.year % 100 === 0) return false;
      return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1994,9,3);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log('1994', myDate.isLeapYear);

const myDate2 = new MyDate(2000,9,3);
console.log('Año 2000 ',myDate2.isLeapYear);

const myDate3 = new MyDate(2001,9,3);
console.log('Año 2001 ',myDate3.isLeapYear);

const myDate4 = new MyDate(2004,9,3);
console.log('Año 2004 ',myDate4.isLeapYear);
