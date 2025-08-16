import { useEffect, useState } from "react";

let ClockTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log(`Interval has been set up`);
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
      console.log(`Canceled the interval`);
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
