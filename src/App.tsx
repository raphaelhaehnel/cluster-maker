import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Canvas from "./canvas";

function App() {
  function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
    // const { width, height } = canvas.getBoundingClientRect();
    const width = 80;
    const height = 200;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true; // here you can return some usefull information like delta width and delta height instead of just true
      // this information can be used in the next redraw...
    }

    return false;
  }

  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    const radius = 10;
    const width = ctx.canvas.width;
    var x: number;
    frameCount = frameCount / 4;

    if (Math.floor(frameCount / (width - 2 * radius)) % 2 == 0) {
      x = radius + (frameCount % (width - 2 * radius));
    } else {
      x = width - radius - (frameCount % (width - 2 * radius));
    }
    ctx.clearRect(0, 0, width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);

    ctx.arc(
      x, //x    10 + 25
      50 + 10 * Math.sin(0.2 * frameCount), //y
      radius, //radius
      0,
      2 * Math.PI
    );

    ctx.fill();
  };

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
    </div>
  );
}

export default App;
