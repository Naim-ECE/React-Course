import { useRef, useState } from "react";
import styles from "./AddTodo.module.css";
import { MdAddToPhotos } from "react-icons/md";

function AddTodo({ onNewItem }) {
  let [todoName, setTodoName] = useState("");

  let [todoDate, setTodoDate] = useState("");

  let noOfClicks = useRef(0);

  const nameAction = (todoName) => {
    setTodoName(todoName);
    // noOfClicks.current += 1;
  };

  const dateAction = (todoDate) => {
    setTodoDate(todoDate);
    // console.log(`No. of click is ${noOfClicks.current}`);
  };

  const handleOnClick = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <>
      <div className="container">
        <div className={`row ${styles["gap-row"]}`}>
          <div className="col-4 d-flex justify-content-end">
            <input
              type="text"
              placeholder="Enter Todo Here"
              className={`${styles["todo-input"]}`}
              value={todoName}
              onChange={(event) => nameAction(event.target.value)}
            />
          </div>
          <div className="col-4  d-flex justify-content-end">
            <input
              type="date"
              className={`${styles["todo-calendar"]}`}
              value={todoDate}
              onChange={(event) => dateAction(event.target.value)}
            />
          </div>
          <div className="col-2 d-flex justify-content-end">
            <button
              type="button"
              className={`btn btn-success ${styles["kg-button"]}`}
              onClick={handleOnClick}
            >
              <MdAddToPhotos />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
