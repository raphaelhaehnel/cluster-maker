import React, { useRef, useEffect } from "react";
import CanvasProps from "./interfaces/canvasProps";

const Canvas = (props: CanvasProps) => {
  const { draw, ...rest } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas!.getContext("2d");
    let frameCount = 0;
    let animationFrameId: number;

    if (context == null) {
      console.log("error");
      return;
    }

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
