import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App V1";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Test() {
//   const [maxRating, setMaxRating] = useState(0);

//   return (
//     <div>
//       {/* <StarRating color="blue" onSetRating={setMaxRating} />
//       <p> This Movie Was Rated {maxRating} out of 5</p> */}
//       <App></App>
//     </div>
//   );
// }
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      color="red"
      size="24"
      messages={["Terrible", "Okay", "Good", "V.good", "Amazing"]}
    />
    <StarRating />
    <Test /> */}
  </React.StrictMode>
);
