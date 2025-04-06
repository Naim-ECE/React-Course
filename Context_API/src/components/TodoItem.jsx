import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  // let todoName = "Buy Milk";
  // let todoDate = "04/12/2024";
  const {deleteItem} = useContext(TodoItemsContext);

  return (
    <>
      <div className="container">
        <div className={`row ${styles["gap-row"]}`}>
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2 d-flex justify-content-end">
            <button
              type="button"
              className={`btn btn-danger ${styles["kg-button"]}`}
              onClick={() => deleteItem(todoName)}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
