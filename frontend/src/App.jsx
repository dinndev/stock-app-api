import { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Form from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Private from "./components/Private";
import Portfolio from "./components/Portfolio";
import { TransactionContextProvider } from "./state/UserContext";
import { initialState, reducer } from "./state/reducer";
import Nav from "./components/Nav";

export const DataContext = React.createContext({});
function App() {
  return (
    <TransactionContextProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </TransactionContextProvider>
  );
}
export default App;
