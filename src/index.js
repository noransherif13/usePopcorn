import React, { useState } from "react";
import ReactDOM from "react-dom/client";
/* import './index.css';
import App from './App'; */
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
      <p>this movie was Rated {movieRating} Stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*  <App /> */}

    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating size="28" color="red" />
    <Test />
  </React.StrictMode>
);
