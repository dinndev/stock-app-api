import React from "react";

function Card({ stocks }) {
  return (
    <div className="flex flex-col w-1/2">
      <div className="w-full item-center flex justify-start py-10 px-16">
        <h1 className="text-3xl font-bold">Top 10 Stocks</h1>
      </div>
      {stocks.data &&
        stocks.data.map(({ symbol, high, company_name, low }) => {
          return (
            <div
              key={symbol}
              className="bg-white border-b m-5 flex flex-col justify-around h-40"
            >
              <p className=" font-bold"> {symbol}</p>
              <h1>{company_name}</h1>

              <span>
                High: <span className="text-green-500">{high}</span>
              </span>
              <span>
                Low: <span className="text-red-500">{low}</span>
              </span>
              <button
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
