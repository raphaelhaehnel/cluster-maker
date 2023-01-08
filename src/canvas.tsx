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

    const particle1 = new Particle(0, [100, 100], [0, 0], 5, 2, 0.5);
    const particle2 = new Particle(1, [80, 100], [0, 6], 5, 2, 0.5);

    let listParticles = [particle1, particle2];

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
      draw(context, frameCount, listParticles);
      listParticles[1].move(0.2, listParticles[0]);
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
