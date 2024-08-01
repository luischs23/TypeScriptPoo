export interface Driver{
  database: string,
  password: string,
  port: number,

  connect(): void;
  disconnect(): void;
  isConnected(name:string):boolean
}

// const driver: Driver = {
//   database: 'my_database',
//   password: 'my_password',
//   port: 5432,}

class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ){}
  connect(): void {
    //code
  }
  disconnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }
}
class OracleDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ){}
  connect(): void {
    //code
  }
  disconnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }
}
