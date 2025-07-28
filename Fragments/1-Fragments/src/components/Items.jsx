import styles from "./Items.module.css";

let Items = ({ khabar, bought, handle, textChange }) => {
  var txt = "BUY";
  // if (bought) {
  //   txt = "GIVE IT BACK";
  // } else {
  //   txt = "BUY";
  // }
  return (
    <>
      <li
        id={`${styles["kg-item"]}`}
        className={`list-group-item ${bought && "active"}`}
      >
        <span className={`${styles["kg-span"]}`}>{khabar}</span>
        <button
          className={`${styles.button}  btn btn-info ${
            bought && "btn btn-danger"
          }`}
          onClick={handle}
        >
          {!bought ? txt : "Bought"}
        </button>
      </li>
    </>
  );
};

export default Items;

//   const buttonIsBeingClicked = (event) => {
//     console.log(event);
//     console.log(`${khabar} being clicked`);
//   };
// let {khabar} = props;
