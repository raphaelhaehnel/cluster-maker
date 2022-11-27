import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Canvas from "./canvas";

function App() {
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  const [count, setCount] = useState(0);
  const [myCanvas, setCanvas] = useState(<Canvas draw={draw} />);

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
    </div>
  );
}

export default App;
