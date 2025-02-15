import { FAR_FIELD, K, NEAR_FIELD } from "./constants";

type coord_2d = {
  x: number;
  y: number;
};

export default class Particle {
  // Identification number
  id: number;

  // The current position of the particle
  p: coord_2d;

  // The temporary position of the particle
  p_t: coord_2d;

  // The current speed of the particle
  v: coord_2d;

  // The charge of the particle. It can be replaced by the mass, or any other measurable quantity
  q: number;

  // The radius of the particle
  r: number;

  m: number;

  f: coord_2d;

  color: string;

  constructor(
    id: number,
    position: coord_2d,
    velocity: coord_2d,
    charge: number,
    radius: number,
    mass: number,
    color: string
  ) {
    this.id = id;
    this.p = position;
    this.p_t = position;
    this.v = velocity;
    this.q = charge;
    this.r = radius;
    this.m = mass;
    this.f = { x: 0, y: 0 };
    this.color = color;
  }

  computeForce(p1: Particle) {
    const dx = p1.p.x - this.p.x; // Compute distance between centers of objects
    const dy = p1.p.y - this.p.y;
    let d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

    if (d > this.r + p1.r) {
      const f = (K * this.m * p1.m) / Math.pow(d, 2);
      const fx = (f * dx) / d; // Break it down into components
      const fy = (f * dy) / d;
      this.f.x += fx;
      this.f.y += fy;
    }
  }

  moveTemp() {
    const dt = 0.02;
    const ax = this.f.x / this.m;
    const ay = this.f.y / this.m;

    this.p_t.x += this.v.x * dt + 0.5 * ax * dt * dt;
    this.p_t.y += this.v.y * dt + 0.5 * ay * dt * dt;
    this.v.x += ax * dt;
    this.v.y += ay * dt;
  }

  move() {
    this.p.x = this.p_t.x;
    this.p.y = this.p_t.y;
  }
}
