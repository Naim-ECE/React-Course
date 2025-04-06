function Random() {

    let number = Math.floor(Math.random() * 100);

    return <>
        <h1 style={{backgroundColor:"black", color:"white"}}>Random number is : {number}</h1>
    </>
}

export default Random;