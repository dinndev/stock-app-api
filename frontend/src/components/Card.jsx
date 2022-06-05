import axios from "axios";
import { v4 as id } from "uuid";
import React from "react";
import { useTransactionContext } from "../state/UserContext";
import { Link } from "react-router-dom";

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

  const sell_stock = async (name, ticker) => {
    const data = await axios.post(
      "http://localhost:3000/sell",
      {
        name,
        user: current_user.data.id,
        stock: ticker,
        mode: "Sell",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(data);
  };
  return (
    <div className="flex flex-col h-screen  w-1/2">
      <div className="w-full item-start flex justify-start py-10 px-16">
        <h1 className="text-3xl font-bold">stocks</h1>
      </div>
      {stocks.data.length >= 1 ? (
        stocks.data.map((stock) => {
          const { ticker, name, price } = stock;
          return (
            <div
              key={id()}
              className="bg-white border-b m-5 flex flex-col justify-around h-40"
            >
              <p className=" font-bold"> {ticker}</p>
              <h1>{name}</h1>

              <span>
                Price: <span className="text-green-500">{price}</span>
              </span>
              <button
                onClick={() => sell_stock(name, ticker)}
                type="button"
                className="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium w-1/4 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Sell
              </button>
            </div>
          );
        })
      ) : (
        <Link to="/stocks"> Buy a stock</Link>
      )}
    </div>
  );
}

export default Card;
