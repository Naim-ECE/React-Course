import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext({
  items: [],
  addingItems: () => {},
  deleteItem: () => {},
});


const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name != action.payload.todoItemName
    );
  }
  return newTodoItems;
};


const TodoItemsContextProvider = ( {children} ) => {
  const [todoItems, dispatchItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchItems(newItemAction);

    /*setTodoItems((currValue) => [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ]);*/
  };
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchItems(deleteItemAction);

    /*const newItemName = todoItems.filter((item) => item.name !== todoItemName);
      setTodoItems(newItemName);*/
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
