import { useState } from "react";
import Header from "../Header";
import Button from "../Button";

export default function Counter() {
  const [counter,setCounter]= useState(0);
  // value, setValue, dispatches an action or update

  const handleClick = (value) =>{
    setCounter(counter+value)
  }
  return (
    <div className="App">
      <Header title={"Counter"}/>
      <Header title={counter}/>
      <Button title="ADD" onClick={()=>handleClick(1)}/>
      <Button title="REDUCE" onClick={()=>handleClick(-1)}/>
    </div>
  );
}

