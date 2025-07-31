import TodoItem from "./TodoItem";
import a from "./TodoItems.module.css"

const TodoItems = ({ todoItem, onDeleteClick }) => {

    return (
        <>
            <div className={`${a["items-container"]}`}>

                {todoItem.map((item) => ( 
                <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} onDeleteClick = {onDeleteClick} />
                ))}

                {/* <TodoItem todoName={todoItems} todoDate="04/12/2024" />
                <TodoItem todoName="Goto College" todoDate="11/01/2025" /> */}

            </div>

        </>
    );
}

export default TodoItems;