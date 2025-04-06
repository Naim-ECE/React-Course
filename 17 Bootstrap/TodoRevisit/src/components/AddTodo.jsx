import styles from "./AddTodo.module.css"

function AddTodo() {
    return (
        <>
            <div className="container">

                <div className={`row ${styles["gap-row"]}`}>
                    <div className="col-4">
                        <input type="text" placeholder="Enter Todo Here" className={`${styles["todo-input"]}`}/>
                    </div>
                    <div className="col-4">
                        <input type="date" />
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <button type="button" className={`btn btn-success ${styles["kg-button"]}`}>Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddTodo;