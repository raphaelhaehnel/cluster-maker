# Javascript Gravitation simulator

This project implements physics of particles.
It uses React and Typescript.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage
1. Run npm start in the project directory
2. In `canvas.tsx`, modify or add new particles in function useEffect()

## Files explanation

#### Pure-Web part
- `index.tsx`: Initializes and renders the root React component
- `App.tsx`: Fefines the main React component which displays a canvas for drawing animations
- `canvas.tsx`: Defines a React component that renders a canvas, initializes an artificial physics world with particles, and continuously updates it
- `draw.tsx`: Defines a draw function that renders a set of Particle objects on an html canvas

#### Physics part
- `artificial_world.tsx`: Defines the `ArtificialWorld` class, which manages a simulation of interacting particles
- `particle.tsx`: Defines the `Particle` class, which represents a particle and interactions with other particles
- `constants.tsx`: Defines constants used for simulation parameters

## Example screenshots
![usage example](https://github.com/user-attachments/assets/61336c77-dc4a-435d-8d1c-02bbd50d51e7)
