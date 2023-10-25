import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { count: state.count + 1 };
    case "SUB":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "ADD" });
  };

  const decrement = () => {
    dispatch({ type: "SUB" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>Counter Value: {state.count}</h1>
      </div>
      <div className="d-flex justify-content-center ">
        <button className="mx-2 btn btn-primary " onClick={increment}>
          Increment
        </button>
        <button className="mx-2 btn btn-primary " onClick={reset}>
          Reset
        </button>
        <button className="mx-2 btn btn-primary " onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
