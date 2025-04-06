function TodoItem2() {

    let todoName = "Go to college";
    let todoDate = "01/03/2025";

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

export default TodoItem2;