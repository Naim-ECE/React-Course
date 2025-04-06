import styles from "./FoodInput.module.css";

const FoodInput = ({onKeyHandler}) => {

    // const handler = (event) => {
    //     console.log(event.target.value)
    // }

  return (
    <>
      <input className={styles.item} type="text" placeholder="Enter food item here" 
      onKeyDown={onKeyHandler}/>
    </>
  );
};

export default FoodInput;
