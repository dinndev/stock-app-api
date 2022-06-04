import axios from "axios";
import React from "react";
import { useTransactionContext } from "../state/UserContext";

function Card({ stocks }) {
  const [{ current_user }] = useTransactionContext();
  const buy_stock = async (price, name, ticker) => {
    const data = await axios.post(
      "http://localhost:3000/buy",
      {
        user: current_user.data.id,
        stock: ticker,
        price,
        name,
        mode: "Buy",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div className="flex flex-col w-1/2">
      <div className="w-full item-center flex justify-start py-10 px-16">
        <h1 className="text-3xl font-bold">Top 10 Stocks</h1>
      </div>
      {stocks.data &&
        stocks.data.map((stock) => {
          const { ticker, name, price } = stock;
          return (
            <div
              key={ticker}
              className="bg-white border-b m-5 flex flex-col justify-around h-40"
            >
              <p className=" font-bold"> {ticker}</p>
              <h1>{name}</h1>

              <span>
                High: <span className="text-green-500">{price}</span>
              </span>
              <button
                onClick={() => buy_stock(price, name, ticker)}
                type="button"
                className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium w-1/4 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Buy
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
