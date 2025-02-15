import React, { useRef, useEffect, useState } from "react";
import CanvasProps from "./interfaces/canvasProps";
import ArtificialWorld from "./physics/artificial_world";
import Particle from "./physics/particle";

const Canvas = (props: CanvasProps) => {
  const { resize, draw, ...rest } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas!.getContext("2d");
    let frameCount = 0;
    let animationFrameId: number;

    const p1 = new Particle(
      0,
      { x: 100, y: 100 },
      { x: 0, y: 0 },
      5,
      8,
      Math.pow(8, 3),
      "blue"
    );
    const p2 = new Particle(
      1,
      { x: 80, y: 160 },
      { x: -15, y: -10 },
      5,
      6,
      Math.pow(6, 3),
      "yellow"
    );
    const p3 = new Particle(
      2,
      { x: 60, y: 60 },
      { x: 20, y: -10 },
      5,
      2,
      Math.pow(2, 3),
      "green"
    );

    const artificalWorld = new ArtificialWorld(context!.canvas, p1, p2, p3);

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
      draw(context, frameCount, artificalWorld.particles);
      artificalWorld.roundTrip();
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
