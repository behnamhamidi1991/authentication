import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  async function getData() {
    const url =
      "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fa982306ecmsh438ba6bf7ad4885p191618jsn582b5ea5c40b",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container"></div>
    </>
  );
}

export default App;
