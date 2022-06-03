import React from "react";
import { useEffect } from "react";
import { useTransactionContext } from "../state/UserContext";
import axios from "axios";

function Portfolio() {
  const [{ user }, dispatch] = useTransactionContext();

  useEffect(() => {
    const current_user = async () => {
      const data = await axios({
        method: "GET",
        url: "http://localhost:3000/current_user",
        headers: {
          Authorization: user.headers.authorization,
        },
      });
      dispatch({
        type: "SET_USER",
        payload: data,
      });
    };
    current_user();
  }, []);
  return <div>Portfolio</div>;
}

export default Portfolio;
