import React, { useRef, useEffect } from "react";
import CanvasProps from "./interfaces/canvasProps";

const Canvas = (props: CanvasProps) => {
  const { draw, resize, ...rest } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas!.getContext("2d");
    let frameCount = 0;
    let animationFrameId: number;

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
