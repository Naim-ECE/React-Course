import "./App.css";
import Container from "./components/Container";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate }, //giver correct updates of values
    ]);
  };

  const handleDelete = (todoItemName) => {
    const newItemName = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newItemName);
  };

  return (
    <>
      <TodoItemsContext.Provider>
        <center>
          <AppName />
          <Container>
            <AddTodo onNewItem={handleNewItem} />
            <WelcomeMessage todoItems={todoItems} />
            <TodoItems
              key={todoItems}
              todoItem={todoItems}
              onDeleteClick={handleDelete}
            />
          </Container>
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
