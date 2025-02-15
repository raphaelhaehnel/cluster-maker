import Particle from "./particle";

type Force = {
  x: number;
  y: number;
};

class Collision {
  p1: Particle;
  p2: Particle;
  dx: number;
  dy: number;
  d: number;

  constructor(p1: Particle, p2: Particle, dx: number, dy: number, d: number) {
    this.p1 = p1;
    this.p2 = p2;

    this.dx = dx;
    this.dy = dy;
    this.d = d;
  }
}

export default class ArtificialWorld {
  particles: Particle[];

  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, ...particles: Particle[]) {
    this.canvas = canvas;
    this.particles = particles;
  }

  resolveEdgeCollisions() {
    this.particles.forEach(p => {
      if (p.p.x - p.r < 0 || p.p.x + p.r > this.canvas.width) {
        p.v.x *= -1; // Reflect velocity on x-axis
      }
      if (p.p.y - p.r < 0 || p.p.y + p.r > this.canvas.height) {
        p.v.y *= -1; // Reflect velocity on y-axis
      }
    });
  }

  computeAllForces() {
    this.particles.forEach(particle => {
      particle.f.x=0
      particle.f.y=0
    })

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = 0; j < this.particles.length; j++) {
        if (i == j) {
          continue;
        }
        this.particles[i].computeForce(this.particles[j]);
      }
    }
  }

  moveAllTemp() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].moveTemp();
    }
  }

  moveAll() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].move();
    }
  }

  roundTrip() {
    // Compute the force on the particle
    this.computeAllForces();

    // Update the temporary new position of the particle
    this.moveAllTemp();

    // Handle edge collisions.
    // this.resolveEdgeCollisions();

    // Update the new position of the particle
    this.moveAll();

  }
}
