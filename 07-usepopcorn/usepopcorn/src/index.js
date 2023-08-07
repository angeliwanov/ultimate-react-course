import React from "react";
// import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App2 from "./App";
// import CurrencyConverter from "./CurrencyConverter";
// import StarRarting from "./StarRarting";
// import ExpandText from "./TextExpander";

// function ExternalPropSetting() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRarting onSetRating={setMovieRating} color="blue" size={36} />
//       <p>This movie was rated {movieRating} stars.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <CurrencyConverter /> */}
    <App2 />
    {/* <StarRarting maxRating={10} />
    <StarRarting
      maxRating={5}
      color="red"
      size={24}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
      defaultRating={3}
    />
    <ExternalPropSetting /> */}
    {/* <ExpandText /> */}
  </React.StrictMode>
);
