import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [fucks, setFucks] = useState([]);
  useEffect(() => {
    axios
      .get("https://foaas.com/operations", {
        headers: { Accept: "application/json" }
      })
      .then((res) => {
        // console.log(res.data);
        const resFucks = res.data;
        setFucks(resFucks);
      });
  }, []);

  return (
    <div className="App">
      <h1>Flip 'em off 101</h1>
      {fucks &&
        fucks.map((fs, i) => {
          return (
            <div key={i}>
              <h1> {fs.name} </h1>
            </div>
          );
        })}
    </div>
  );
}
