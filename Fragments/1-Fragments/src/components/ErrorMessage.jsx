const ErrorMessage = ({khabar}) => {
    // let healthyFood = ["Rice", "Egg", "Beef", "Chicken", "Potato", "Kacchi"];
    return(
        <>
            {khabar.length === 0 && <h1>I'm hungry.</h1>}
        </>
    );
}

export default ErrorMessage;