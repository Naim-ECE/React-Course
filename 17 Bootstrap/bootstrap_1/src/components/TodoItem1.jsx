function TodoItem1() {

    let todoName = "Buy Milk";
    let todoDate = "04/12/2024";

    return (
        <>
            <div className="container">


                <div className="row gap-row">
                    <div className="col-4">
                        {todoName}
                    </div>
                    <div className="col-4">
                        {todoDate}
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <button type="button" className="btn btn-danger kg-button">Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoItem1;