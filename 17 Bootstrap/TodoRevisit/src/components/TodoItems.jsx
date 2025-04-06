import TodoItem from "./TodoItem";
import a from "./TodoItems.module.css"

const TodoItems = ({ todoItems }) => {

    return (
        <>
            <div className={`${a["items-container"]}`}>

                {todoItems.map((item) => ( 
                <TodoItem todoName={item.name} todoDate={item.dueDate} />    
                ))}

                {/* <TodoItem todoName={todoItems} todoDate="04/12/2024" />
                <TodoItem todoName="Goto College" todoDate="11/01/2025" /> */}

            </div>

        </>
    );
}

export default TodoItems;