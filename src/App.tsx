import React, { useState, useEffect } from "react";
import "./App.css";
import Canvas from "./canvas";
import { Counter } from "./features/counter/counter";
import { draw } from "./functions/draw";
import { resizeCanvasToDisplaySize } from "./functions/resizeToDisplay";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [count, setCount] = useState(0);
  const [myCanvas, setCanvas] = useState(
    <Canvas draw={draw} resize={resizeCanvasToDisplaySize} />
  );

  useEffect(() => {
    document.title = `${count}`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      {myCanvas}
      <div>
        The mouse is at position{" "}
        <b>
          ({mousePos.x}, {mousePos.y})
        </b>
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
