import Container from "./components/Container";
import Header from "./components/Header";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
  // let healthyFood = [
  //   "Rice",
  //   "Egg",
  //   "Beef",
  //   "Chicken",
  //   "Potato",
  //   "Kacchi Biryani",
  // ];

  let [healthyFood, trigger] = useState([
    
  ]);

  let [textToShow, setTextState] = useState("2nd text viewer");
  // console.log(`Current = ${textToShow}`);

  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      textToShow = event.target.value;
      setTextState(textToShow || "Don't leave it empty there!");
      if (textToShow.length != 0) {
        let newItems = [...healthyFood, textToShow];
        trigger(newItems);
      }
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <Header />
        <FoodInput onKeyHandler={handleOnChange} />
        <p>{textToShow}</p>
        <FoodItems khabars={healthyFood} />
        <ErrorMessage khabar={healthyFood} />
      </Container>

      <Container>
        <p>
          <b>
            !!REMINDER!!<br />
            Above should be the list of the food that is good for health and well
            being.
          </b>
        </p>
      </Container>
    </>
  );
}

export default App;

// import React from 'react';
{
  /* </ul> */
}
{
  /* <h1>Healthy Food</h1> */
}
// let textToShow = "Food input can be seen here";

//let textStateArr = useState("Food input can be seen here"); Return two arrays. 1st(return array) is for default text & 2nd(return method) for updating the state
// let textToShow = textStateArr[0];
// let textToShow = textStateArr[1];

// console.log(`Updated = ${setTextState}`);
// if (textToShow === null) {
//   setTextState("Write something man!"); doesn't work!
// }
{
  /* {healthyFood.length === 0 ? <h1>I'm hungry.</h1> : null} */
}

{
  /* {message} */
}
{
  /* {healthyFood.length === 0 && <h1>I'm hungry.</h1>} */
}
{
  /* <ul className="list-group"> */
}

{
  /* { */
}

// if(healthyFood.length === 0) {
//   return <h1>I'm hungry.</h1>
// }

// let message = healthyFood.length === 0 ? <h1>I'm hungry.</h1> : null;
