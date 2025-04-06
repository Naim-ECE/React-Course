import styles from "./Items.module.css";

let Items = ({ khabar, bought, handle }) => {
  var txt = "BUY";
  // if (bought) {
  //   txt = "GIVE IT BACK";
  // } else {
  //   txt = "BUY";
  // }
  return (
    <>
      <li
        className={`list-group-item ${bought && "active"}`}
        id={`${styles["kg-item"]}`}
      >
        <span className={`${styles["kg-span"]}`}>{khabar}</span>
        <button className={`${styles.button}  btn btn-info`} onClick={handle}>
          {txt}
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
