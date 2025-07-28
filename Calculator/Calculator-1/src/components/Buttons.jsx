import { useState } from "react";
import Input from "./Input";
import styles from "./Buttons.module.css";

let Buttons = ({onButtonClick}) => {
  let btn = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className={styles.buttonContainer}>
        {btn.map((botam) => (
          <button key={botam} className={styles.btntool} onClick={() => onButtonClick(botam)}>{botam}</button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
