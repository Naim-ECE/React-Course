import "./App.css";
import Container from "./components/Container";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New item is ${itemName} Date: ${itemDueDate}`);

    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate }, //giver correct updates of values
    ]);
  };

  const handleDelete = (todoItemName) => {
    const newItemName = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newItemName);

    // console.log(`Deleted: ${todoItemName}`);
  };

  return (
    <>
      <center>
        <AppName />
        <Container>
          <AddTodo onNewItem={handleNewItem} />
          {todoItems.length === 0 && <WelcomeMessage />}
          <TodoItems
            key={todoItems}
            todoItem={todoItems}
            onDeleteClick={handleDelete}
          />
        </Container>
      </center>
    </>
  );
}

export default App;

// const initialTodoItems = [
//   {
//     name: "Buy Milk",
//     dueDate: "04/12/2024",
//   },
//   {
//     name: "Go to College",
//     dueDate: "11/01/25",
//   },
//   {
//     name: "Open Class",
//     dueDate: "12/04/25",
//   },
// ];
