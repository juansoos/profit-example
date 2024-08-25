import { Stock } from "./stock";

export class Portfolio {
  stocks: Stock[];

  constructor(stocks: Stock[]) {
    this.stocks = stocks;
  }

  profit(startDate: Date, endDate: Date): number {
    let initialValue = 0;
    let finalValue = 0;

    this.stocks.forEach((stock: Stock) => {
      initialValue += stock.price(startDate);
      finalValue += stock.price(endDate);
    });

    return finalValue - initialValue;
  }
}
