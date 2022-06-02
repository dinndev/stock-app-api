import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Form() {
  const [emailInputOnchageValue, setEmailInputOnchangeValue] = useState("");
  const [passwordInputOnchageValue, setPasswordInputOnchangeValue] =
    useState("");
  const [bearer, setBearer] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:3000/login", {
      user: {
        email: "aladin.penagunda@sun-asterisk.com",
        password: "1231password",
      },
    });
    setBearer(data.headers.authorization);
  };

  const current_user = async () => {
    const data = await axios({
      method: "GET",
      url: "http://localhost:3000/current_user",
      headers: {
        Authorization: bearer,
      },
    });
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
      <form onSubmit={login}>
        <input
          type="email"
          value={emailInputOnchageValue}
          onChange={(e) => setEmailInputOnchangeValue(e.target.value)}
          name="email"
        />

        <input
          type="password"
          value={passwordInputOnchageValue}
          onChange={(e) => setPasswordInputOnchangeValue(e.target.value)}
          name="password"
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={current_user}>get current user</button>
      <button onClick={logout}>logout</button>
    </>
  );
}

export default Form;
