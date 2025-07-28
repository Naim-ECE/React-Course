import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

function App() {
  let [calVal, setCalVal] = useState("");

  const showingTheValue = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      var result = eval(calVal);
      setCalVal(result);
      if (
        buttonText === "*" ||
        buttonText === "+" ||
        buttonText === "-" ||
        buttonText === "/"
      ) {
        result += eval(calVal);
        setCalVal(result);
      }
    } else {
      let newValue = calVal + buttonText;
      setCalVal(newValue);
    }

    // console.log(buttonText);
  };

  return (
    <>
      <div className="calculator">
        <Input displayValue={calVal} />
        <Buttons onButtonClick={showingTheValue} />
      </div>
    </>
  );
}

export default App;
