import Particle from "../physics/particle";

export function draw(
  ctx: CanvasRenderingContext2D,
  frameCount: number,
  listParticles: Particle[]
) {
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

  ctx.arc(
    x, //x    10 + 25
    50 + 10 * Math.sin(0.2 * frameCount), //y
    radius, //radius
    0,
    2 * Math.PI
  );

  for (const particle of listParticles) {
    ctx.moveTo(particle.getPosition()[0], particle.getPosition()[1]);
    ctx.arc(
      particle.getPosition()[0], //x    10 + 25
      particle.getPosition()[1], //y
      5, //radius
      0,
      2 * Math.PI
    );
  }
  ctx.stroke();
  ctx.fill();
}
