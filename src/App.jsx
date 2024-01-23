import React, { useState, useEffect } from "react";

function App() {
  const [endPoint, setEndPoint] = useState("");
  const [container, setContainer] = useState([]);
  const [finalPoint, setFinalPoint] = useState("");

  useEffect(() => {
    fetchData();
  }, [finalPoint]);

  const fetchData = () => {
    fetch(
      `https://online-movie-database.p.rapidapi.com/auto-complete?q=+${endPoint}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fa982306ecmsh438ba6bf7ad4885p191618jsn582b5ea5c40b",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContainer(data.d);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeHandler = (e) => {
    setEndPoint(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalPoint(endPoint);
  };

  return (
    <>
      <div className="container">
        <form className="formContainer" onSubmit={submitHandler}>
          <input type="text" value={endPoint} onChange={onChangeHandler} />
          <button type="submit">Submit</button>
        </form>

        <div className="movieContainer">
          {container.map((item) => {
            return (
              <div key={item.id} className="movieBox">
                <img
                  src={item.i.imageUrl}
                  alt="movie-image"
                  className="movieImage"
                />
                <div className="details">
                  <h3>{item.l}</h3>

                  <p>Rank: {item.rank}</p>
                  <p>Year: {item.y}</p>
                  <p>{item.q}</p>
                  <p>{item.s}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
