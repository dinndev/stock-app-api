import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTransactionContext } from "../state/UserContext";

function Form() {
  const navigate = useNavigate();
  const [emailInputOnchageValue, setEmailInputOnchangeValue] = useState("");
  const [passwordInputOnchageValue, setPasswordInputOnchangeValue] =
    useState("");
  const [user, dispatch] = useTransactionContext();

  const [bearer, setBearer] = useState("");
  const login = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post("http://localhost:3000/login", {
        user: {
          email: "dinndev@gmail.com",
          password: "123Password",
        },
      });
      dispatch({
        type: "SET_USER",
        payload: data,
      });
      navigate("portfolio");
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    const data = await axios({
      method: "DELETE",
      url: "http://localhost:3000/logout",
      headers: {
        Authorization: bearer,
      },
    });
  };

  return (
    <>
      <form onSubmit={login} className="flex justify-center self-center  z-10">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
            <p className="text-gray-500">Please sign in to your account.</p>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                value={emailInputOnchageValue}
                onChange={(e) => setEmailInputOnchangeValue(e.target.value)}
                className="w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="email"
                placeholder="mail@gmail.com"
              />
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                value={passwordInputOnchageValue}
                onChange={(e) => setPasswordInputOnchangeValue(e.target.value)}
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="pt-5 text-center text-gray-400 text-xs">
            <span>Copyright © 2021-2022</span>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
