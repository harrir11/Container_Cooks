# Container_Cooks

A Docker and Kubernetes project with a kitchen metaphor: cooks as containers working together.

## Run it locally

You need [Node.js](https://nodejs.org) installed.

```
npm install
npm run dev
```

Then open the local address it prints (usually http://localhost:5173).

## Project layout

- `src/game/` holds the whole game: `ContainerCooks.tsx` and its styles in `ContainerCooks.css`. Class names start with `cc-` so they won't clash with other styles.
- `src/App.tsx`, `src/main.tsx` and `src/index.css` are just a page for developing the game on its own.

## Moving it into the portfolio

Copy the `src/game` folder into the Skills_Portfolio `src` folder, then render it where you want it:

```tsx
import ContainerCooks from "./game/ContainerCooks";

<ContainerCooks />
```
