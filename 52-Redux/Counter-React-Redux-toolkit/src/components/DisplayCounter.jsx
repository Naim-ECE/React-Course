import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  // const counter = counterObj.counterVal;

  return (
    <>
      <p className="lead mb-4 fw-normal">Counter current value: {counterVal}</p>
    </>
  );
};

export default DisplayCounter;
