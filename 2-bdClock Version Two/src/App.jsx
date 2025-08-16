import "./App.css";
import ClockHeading from "./components/clockHeading";
import ClockPara from "./components/ClockPara";
import ClockTime from "./components/ClockTime";

function App() {
  return (
    <>
      <div className="container">
        <ClockHeading />
        <ClockPara />
        <ClockTime />
      </div>
    </>
  );
}

export default App;
