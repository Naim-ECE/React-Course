import { useEffect, useState } from "react";

let ClockTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <p className="txt2">
        This is the current time: {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </>
  );
};

export default ClockTime;
