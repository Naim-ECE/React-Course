import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import a from "./TodoItems.module.css";

const TodoItems = () => {
  const todoItemObj = useContext(TodoItemsContext);
  const todoItem = todoItemObj.items;
    // console.log(todoItemObj);

  return (
    <>
      <div className={`${a["items-container"]}`}>
        {todoItem.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          />
        ))}

        {/* <TodoItem todoName={todoItems} todoDate="04/12/2024" />
                <TodoItem todoName="Goto College" todoDate="11/01/2025" /> */}
      </div>
    </>
  );
};

export default TodoItems;
