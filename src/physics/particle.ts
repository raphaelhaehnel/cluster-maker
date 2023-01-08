import { FAR_FIELD, K } from "./constants";

export default class Particle {

    // Identification number
    private id: number;

    // The current position of the particle
    private position: [number, number];

    // The current speed of the particle
    private velocity: [number, number];

    // The charge of the particle. It can be replaced by the mass, or any other measurable quantity
    private charge: number;

    // The radius of the particle
    private r: number;

    private mass: number

    constructor(id: number, position: [number, number], velocity: [number, number], charge: number, r: number, mass: number) {
        this.id = id;
        this.position = position;
        this.velocity = velocity;
        this.charge = charge;
        this.r = r;
        this.mass = mass
        
    }

    /**
     * Get the position of the particle
     */
    getPosition() {
        return this.position;
    }

    /**
     * Get the charge of the particle
     */
    getCharge() {
        return this.charge;
    }

    /**
     * Compute the force applied by the particle p
     * @param p a "Particle" object
     */
    computeForce(p: Particle) {
        // if (this.dist(p) >= FAR_FIELD) {
        //     return;
        // }
        const force_x = K * this.charge * p.charge / (Math.pow(this.dist(p), 3)) * (this.position[0]-p.position[0])
        const force_y = K * this.charge * p.charge / (Math.pow(this.dist(p), 3)) * (this.position[1]-p.position[1])

        return {force_x, force_y}
    }

    /**
     * Compute the total force applied to the particle
     * @param P an array of "Particle" objects
     */
    computeTotalForces(P: Array<Particle>) {

    }

    private dist(p: Particle) {
        var x = this.position[0] - p.position[0];
        var y = this.position[1] - p.position[1];
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    move(dt: number, p: Particle) {
        const F = this.computeForce(p)

        const a_x = - F.force_x / this.mass
        const a_y = - F.force_y / this.mass
        
        const v_x = a_x * dt
        const v_y = a_y * dt

        this.position[0] += this.velocity[0] * dt + v_x * dt / 2
        this.position[1] += this.velocity[1] * dt + v_y * dt / 2

        this.velocity[0] += v_x
        this.velocity[1] += v_y

    }
}