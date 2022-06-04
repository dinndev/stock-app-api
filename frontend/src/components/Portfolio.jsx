import React from "react";
import { useEffect, useState } from "react";
import { useTransactionContext } from "../state/UserContext";
import axios from "axios";
import Card from "./Card";

import Loader from "./Loader";
function Portfolio() {
  const [{ user, stocks }, dispatch] = useTransactionContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const get_stocks = async (_) => {
      const data = await axios({
        method: "GET",
        url: "http://localhost:3000/stock_list",
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
    <div className="flex w-full justify-between items-center">
      {!loading ? <Card stocks={stocks} /> : <Loader />}
    </div>
  );
}

export default Portfolio;
