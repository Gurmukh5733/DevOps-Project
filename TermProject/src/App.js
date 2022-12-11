import React from "react";
import { useState, createContext } from "react";
import Countries from "./Countries.js";
import Flag from "./Flag.js";
import "./App.css";
import { UserContext } from "./USercontext.js";

const App = () => {
  const [chosenCountry, setChosenCountry] = useState([]);

  return (
    <>
      <UserContext.Provider value={[chosenCountry, setChosenCountry]}>
        <h1>Countries of the World</h1>

        <Flag />
        <Countries />
      </UserContext.Provider>
    </>
  );
};

export default App;
