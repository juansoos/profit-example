import { Portfolio, Stock } from "./models";

const stock1 = new Stock("AAPL");
const stock2 = new Stock("GOOGL");
const portfolio = new Portfolio([stock1, stock2]);

const startDate = new Date("2023-10-01");
const endDate = new Date("2024-12-20");

console.log("Profit:", portfolio.profit(startDate, endDate));
