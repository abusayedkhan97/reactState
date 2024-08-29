import { useState } from "react";
import "./counter.css";
const Counter = () => {

    const [counter, setCounter] = useState(0);

    const [value, setvalue] = useState(null);

  //state for background color
  const [color, createColor] = useState("white");

  const bgColor = (bg)=>{
    createColor(bg);
  }
    
    const handelIncriment = ()=>{
        setCounter((priValue) => priValue + 1);
    }

    const handelDecriment = ()=>{
        setCounter((priValue) => priValue - 1);
    }

    const handelReset = () =>{
        setCounter(0);
    }

    // set value

    const handelChangeValue = (e) =>{
        setvalue(e.target.value);
    }

    const handelSet = ()=>{
        setCounter(Number(value));
        setvalue("");
    }

  return (
    <>
        <div className="counter" style={{ backgroundColor: color }}>
        <h1>{counter}</h1>
        <button onClick={handelDecriment}>-</button>
        <button onClick={handelIncriment}>+</button>
        <button onClick={handelReset}>reset</button>
        <button onClick={handelSet}>set</button><br /><br />
        <input type="text" value={value} onChange={handelChangeValue}/>
        </div>

        <h2>choose the counter background Color</h2>

        <div className="bg">
            <button onClick={() => bgColor("#555")} style={{backgroundColor: "#555"}}></button>
            <button onClick={() => bgColor("red")} style={{backgroundColor: "red"}}></button>
            <button onClick={() => bgColor("blue")} style={{backgroundColor: "blue"}}></button>
            <button onClick={() => bgColor("green")} style={{backgroundColor: "green"}}></button>
            <button onClick={() => bgColor("yellow")} style={{backgroundColor: "yellow"}}></button>
            <button onClick={() => bgColor("tomato")} style={{backgroundColor: "tomato"}}></button>
            <button onClick={() => bgColor("rgb(127 0 151)")} style={{backgroundColor: "rgb(127 0 151)"}}></button>
        </div>
    </>
  )
}

export default Counter