import React, { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news",
  params: {
    pair_ID: "1057391",
    page: "1",
    time_utc_offset: "28800",
    lang_ID: "1",
  },
  headers: {
    "X-RapidAPI-Key": "fa982306ecmsh438ba6bf7ad4885p191618jsn582b5ea5c40b",
    "X-RapidAPI-Host": "investing-cryptocurrency-markets.p.rapidapi.com",
  },
};

function App() {
  useEffect(() => {
    async function myApi() {
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    myApi();
  }, []);
  return (
    <>
      <div className="container">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          dolores.
        </p>
      </div>
    </>
  );
}

export default App;
