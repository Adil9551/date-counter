import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app--body">
      <div className="app--main">
        <Step />
      </div>
    </div>
  );

  function Step() {
    const [step, setStep] = useState(5);
    const [count, setCount] = useState(5);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleStep(e) {
      if (step > 1 && e.target.dataset.operation === "subtract")
        setStep((s) => s - 1);

      if (e.target.dataset.operation === "add") setStep((s) => s + 1);
    }

    function handleCount(e) {
      if (e.target.dataset.operation === "subtract") setCount((s) => s - step);

      if (e.target.dataset.operation === "add") setCount((s) => s + step);
    }

    return (
      <>
        <div className="app--container">
          <button
            onClick={handleStep}
            className="btn btn--subtract"
            data-operation="subtract"
          >
            -
          </button>
          <span>Step: {step}</span>
          <button
            onClick={handleStep}
            className="btn btn--add"
            data-operation="add"
          >
            +
          </button>
        </div>
        <div className="app--container">
          <button
            onClick={handleCount}
            className="btn btn--subtract"
            data-operation="subtract"
          >
            -
          </button>
          <span>Count: {count}</span>
          <button
            onClick={handleCount}
            className="btn btn--add"
            data-operation="add"
          >
            +
          </button>
        </div>
        <div>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}{" "}
          <span>{date.toDateString()}</span>
        </div>
      </>
    );
  }

  // function Count() {
  //   const [count, setCount] = useState(5);

  //   function handleCount(e) {
  //     console.log(e.target.dataset.operation);
  //     if (count > 0 && e.target.dataset.operation === "subtract")
  //       setCount((s) => s - 1);

  //     if (e.target.dataset.operation === "add") setCount((s) => s + 1);
  //   }

  //   return (
  //     <div className="app--container">
  //       <button onClick={handleCount} className="btn" data-operation="subtract">
  //         -
  //       </button>
  //       <span>Count: {count}</span>
  //       <button onClick={handleCount} className="btn" data-operation="add">
  //         +
  //       </button>
  //     </div>
  //   );
  // }
}

export default App;
