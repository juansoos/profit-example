import { Portfolio, Stock } from "./models";

const stock1 = new Stock("AAPL");
const stock2 = new Stock("GOOGL");
const portfolio = new Portfolio([stock1, stock2]);

const startDate = new Date("2022-10-01");
const endDate = new Date("2024-12-20");

const { profit, annualizedReturn } = portfolio.profit(startDate, endDate);

console.log("Profit:", profit);
console.log("Annualized return:", annualizedReturn);
