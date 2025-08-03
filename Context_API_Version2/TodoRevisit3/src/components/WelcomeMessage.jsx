import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ todoItems }) => {
  return (
    <>
      {todoItems.length === 0 && (
        <p className={styles.inMessage}>Welcome! Let's add some tasks!</p>
      )}
    </>
  );
};

export default WelcomeMessage;
