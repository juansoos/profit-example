export class Stock {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  price(date: Date): number {
    console.log(
      `Getting price of ${this.name} on ${date.toLocaleDateString()}`
    );

    return Math.random() * 100;
  }
}
