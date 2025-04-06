import "./App.css";
import Container from "./components/Container";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";



function App() {
  // let [todoItems, setTodoItems] = useState([]);


  return (
    <>
      <TodoItemsContextProvider>
        <center>
          <AppName />
          <Container>
            <AddTodo />
            <WelcomeMessage />
            <TodoItems />
          </Container>
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;

// const initialTodoItems = [
//   {
//     name: "Buy Milk",
//     dueDate: "04/12/2024",
//   },
// console.log(`New item is ${itemName} Date: ${itemDueDate}`);
//   {
//     name: "Go to College",
//     dueDate: "11/01/25",
//   },
//   {
//     name: "Open Class",
//     dueDate: "12/04/25",
//   },
// ];
