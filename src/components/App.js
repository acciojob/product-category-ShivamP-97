import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [gender, setGender] = useState("Female");

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

      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <ul>
        {products[gender].map((item, index) => (
          <li key={`${gender}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
