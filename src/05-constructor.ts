export class MyDate{

  constructor(
    public year: number = 2000 ,
    public month: number = 1,
    private day: number = 28){}

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

const myDate2 = new MyDate();
console.log(myDate2.printFormat());

const myDate3 = new MyDate(2024);
console.log(myDate3.printFormat());
