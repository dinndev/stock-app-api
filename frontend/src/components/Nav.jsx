import React from "react";
import { useTransactionContext } from "../state/UserContext";
import axios from "axios";
import { useNavigate } from "react-router";

function Nav() {
  const [{ current_user, user }, dispatch] = useTransactionContext();
  const navigate = useNavigate();
  const logout = async () => {
    const data = await axios({
      method: "DELETE",
      url: "http://localhost:3000/logout",
      headers: {
        Authorization: user.headers.authorization,
      },
    });
    navigate("/");
    dispatch({
      type: "SET_CURRENT_USER",
      payload: "",
    });
  };
  return (
    <>
      <nav className="flex items-center bg-green-400 justify-between p-3 ">
        <a href="#" className="p-2 mr-4 inline-flex items-center">
          <span className="text-xl text-white font-bold uppercase tracking-wide">
            Stock trading app
          </span>
        </a>
        {current_user.data && current_user.data.email ? (
          <button
            onClick={logout}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Logout
          </button>
        ) : (
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Green
          </button>
        )}
      </nav>
    </>
  );
}

export default Nav;
