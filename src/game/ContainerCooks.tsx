import "./ContainerCooks.css";

// The whole game lives inside this component so it can be dropped into
// the portfolio as-is. All class names start with "cc-" so they won't
// clash with the portfolio's styles.
export default function ContainerCooks() {
  return (
    <div className="cc-kitchen" role="region" aria-label="Container Cooks game">
      <p className="cc-placeholder">Container Cooks</p>
    </div>
  );
}
