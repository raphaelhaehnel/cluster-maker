import React, { useRef, useEffect, useState } from "react";
import CanvasProps from "./interfaces/canvasProps";
import Particle from "./physics/particle";

const Canvas = (props: CanvasProps) => {
  const { resize, draw, ...rest } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas!.getContext("2d");
    let frameCount = 0;
    let animationFrameId: number;

    const params = {
      id: 0,
      position: [0, 0],
      velocity: [1, 1],
      charge: 5,
      r: 2,
    };

    const particle = new Particle(...params);

    resize(canvas!);
    canvas!.style.border = "1px solid #000";

    if (context == null) {
      console.error("context is null");
      return;
    }

    const render = (time?: DOMHighResTimeStamp) => {
      if (time != null) {
        // console.log(time);
      }
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} />; // Removed {...props}
};

export default Canvas;
