# Javascript Gravitation simulator

This project implements physics of particles.
It uses React and Typescript.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage
1. Run npm start in the project directory
2. In `canvas.tsx`, modify or add new particles in function useEffect()

## Files explanation
- `draw.tsx`: Defines a draw function that renders a set of Particle objects on an html canvas
- `canvas.tsx`: Defines a React component that renders a canvas, initializes an artificial physics world with particles, and continuously updates and redraws the simulation using the requestAnimationFrame loop. //TODO
- `api_client.py`: Define the API as an enumeration.
- `game.py`: Class representing a game
- `player.py`: Class representing a player
- 
## Example screenshots
![usage example](https://github.com/user-attachments/assets/61336c77-dc4a-435d-8d1c-02bbd50d51e7)
