function Hello() {

    let name = "Naim";
    let fullName = () => {
        return "Md. Naimur Rahman ";
    }

    return <>
        <h3>
            This is a good course. And this course is taking {fullName()}{name}
        </h3>
    </>
}

export default Hello;