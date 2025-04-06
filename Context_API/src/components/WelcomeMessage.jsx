import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const todoItemsObj = useContext(TodoItemsContext);
  const todoItem = todoItemsObj.items;

  return (
    <>
      {todoItem.length === 0 && (
        <p className={styles.inMessage}>Welcome! Let's add some tasks!</p>
      )}
    </>
  );
};

export default WelcomeMessage;
