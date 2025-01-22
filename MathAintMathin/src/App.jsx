import "./App.css";
import React, { useState } from "react";


function App() {
  const [number1, setNumber1] = useState(0); // This is the first box
  const [number2, setNumber2] = useState(0); // Second box
  const [result, setResult] = useState(0); // Total of both numbers

  const handleAddition = () => {
    setResult(Number(number1) + Number(number2));
  };
  //  This mean ^ Number one plus number two will be anything greater or equal to the total of both numbers
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>How Much Money You Want?</h1>
      <input
        type="number"
        placeholder="This Much Dollars"
        onChange={(e) => setNumber1(e.target.value)}
      />

      <br />
      <input
        type="number"
        placeholder="Plus This Much Dollars"
        onChange={(e) => setNumber2(e.target.value)}
      />
      
      <br />
      <button onClick={handleAddition}>•ᴗ•</button>
      <h2>Oooolala ! You got ${result}</h2>
      {/* this is how much moneys you want */}
    </div>
  );
}

export default App;
