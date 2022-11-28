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

    constructor(id: number, position: [number, number], velocity: [number, number], charge: number, r: number) {
        this.id = id;
        this.position = position;
        this.velocity = velocity;
        this.charge = charge;
        this.r = r;
        
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
        if (this.dist(p) >= FAR_FIELD) {
            return;
        }
        let Xforce = K * this.charge * p.charge / (Math.pow(this.dist(p), 3))

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
}