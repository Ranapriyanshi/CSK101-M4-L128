import { useState } from "react";
export default function CounterApp(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let[num, setNumber] = useState(0);
    let incrementation =() =>{
        setNumber(num+1);
    }
    let decrementation = ()=>{
        setNumber(num-1);
    }
    let reset =()=>{
        setNumber(0);
    }
  return (
    <div id="screen">
      <h1>Counter App</h1>
      <h1>{num}</h1>
      <div id="buttons">
        <button className="b" onClick={incrementation}>+</button>
        <button className="b" onClick={decrementation}>-</button>
        <button className="b" onClick={reset}>Reset</button>
      </div>
      
    </div>
  );
  }