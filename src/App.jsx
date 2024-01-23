import React, { useState, useEffect } from "react";

function App() {
  const [endPoint, setEndPoint] = useState("");

  fetch(
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fa982306ecmsh438ba6bf7ad4885p191618jsn582b5ea5c40b",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      console.log(response.json());
    })
    .catch((err) => {
      console.log(err);
    });

  const onChangeHandler = (e) => {
    setEndPoint(e.target.value);
  };

  return (
    <>
      <div className="container">
        <form className="formContainer">
          <input type="text" value={endPoint} onChange={onChangeHandler} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
