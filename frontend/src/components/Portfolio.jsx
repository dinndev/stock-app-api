import React from "react";
import { useEffect, useState } from "react";
import { useTransactionContext } from "../state/UserContext";
import axios from "axios";
import Card from "./Card";

import Loader from "./Loader";
import { data } from "browserslist";
function Portfolio() {
  const [{ user, stocks, current_user }, dispatch] = useTransactionContext();
  const [loading, setLoading] = useState(true);
  console.log(current_user);
  useEffect(() => {
    const get_stocks = async (_) => {
      const data = await axios({
        method: "GET",
        url: "http://localhost:3000/portfolio",
        headers: {
          Authorization: user.headers.authorization,
        },
      });

      dispatch({
        type: "SET_STOCKS",
        payload: data,
      });
      setLoading(false);
    };

    const current_user = async () => {
      const data = await axios({
        method: "GET",
        url: "http://localhost:3000/current_user",
        headers: {
          Authorization: user.headers.authorization,
        },
      });
      dispatch({
        type: "SET_CURRENT_USER",
        payload: data,
      });
    };
    get_stocks();
    current_user();
  }, []);
  return (
    <div className="flex justify-between  items-center h-full">
      {!loading ? <Card stocks={stocks} /> : <Loader />}
      <div className="flex justify-center  w-1/2 h-screen items-start">
        <div className="p-5 rounded-md shadow-lg">
          <p>
            <span className="font-bold">Email:</span>
            {current_user.data && current_user.data.email} <br />
            <span className="font-bold">Balance:</span>
            {current_user.data && current_user.data.wallet}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
