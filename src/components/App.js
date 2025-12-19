import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [gender, setGender] = useState("");

  const products = {
    Male: [
      "Shirts",
      "Facial-grooming kits",
      "Hair styling",
      "Jeans",
      "Shoes"
    ],
    Female: [
      "Tops",
      "Skirts",
      "Makeup items",
      "Jewellery",
      "Sandals"
    ]
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <select onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <ul>
        {gender &&
          products[gender].map((item, index) => (
            <li key={`${gender}-${index}`}>{item}</li>
          ))}
      </ul>
    </div>
  );
};

export default App;
