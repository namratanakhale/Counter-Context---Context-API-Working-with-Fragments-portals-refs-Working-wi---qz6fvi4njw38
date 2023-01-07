import React, { createContext, useState } from "react";

const counterContext = createContext();

const CounterStateContext = (props) => {
  // let count = 0;
  // let setCount = ()=>{
  //     count++;
  // }
  const [count, setCount] = useState(0);

  return (
    <div id="counter-context">
      <counterContext.Provider value={{ count, setCount }}>
        {props.children}
      </counterContext.Provider>
    </div>
  );
};

export { counterContext, CounterStateContext };

