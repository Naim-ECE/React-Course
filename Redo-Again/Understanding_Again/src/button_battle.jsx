export function Buttonrush() {
    let goodButton = "This is a good button";
    let Reality = () => {
        return "really!";
    }

    return ( 
    <>
      <button>
        {goodButton} {Reality()}
      </button>
    </>
    );
}

export function Random_number() {
    let number = Math.floor(Math.random() * 100)
    return (
        <>
        <h2 style={{'color':'red'}}>Random number {number}</h2>
        </>
    );
}

export default function Button_battle() {
    return ( 
    <>
      <button>
        This is a default button
      </button>
    </>
    );
}