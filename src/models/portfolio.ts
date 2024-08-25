import { Stock } from "./stock";

interface IProfit {
  profit: number;
  annualizedReturn: number;
}

export class Portfolio {
  stocks: Stock[];

  constructor(stocks: Stock[]) {
    this.stocks = stocks;
  }

  profit(startDate: Date, endDate: Date): IProfit {
    let initialValue = 0;
    let finalValue = 0;
    const years =
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);

    this.stocks.forEach((stock: Stock) => {
      initialValue += stock.price(startDate);
      finalValue += stock.price(endDate);
    });

    const profit = finalValue - initialValue;
    const annualizedReturn =
      initialValue === 0 || years === 0
        ? 0
        : Math.pow(finalValue / initialValue, 1 / years) - 1;

    return { profit, annualizedReturn };
  }
}
