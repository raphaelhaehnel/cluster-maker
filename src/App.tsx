import React, { useState, useEffect } from "react";
import "./App.css";
import Canvas from "./canvas";
import Particle from "./physics/particle";

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

  function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
    const width = 200;
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

    ctx.arc(
      mousePos.x, //x    10 + 25
      mousePos.y, //y
      radius, //radius
      0,
      2 * Math.PI
    );

    ctx.fillText(mousePos.x.toString(), 20, 20);

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
      <div>
        The mouse is at position{" "}
        <b>
          ({mousePos.x}, {mousePos.y})
        </b>
      </div>
    </div>
  );
}

export default App;
