import ContainerCooks from "./game/ContainerCooks";

// Standalone page for developing the game. When it's done, copy the
// src/game folder into the portfolio and render <ContainerCooks /> there.
export default function App() {
  return (
    <main className="page">
      <ContainerCooks />
    </main>
  );
}
