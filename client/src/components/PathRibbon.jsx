const stages = ["Understand", "Learn", "Build", "Reflect"];

export default function PathRibbon({ session }) {
  let activeStage = 0;

  if (session) {
    if (session.done.every(Boolean)) {
      activeStage = 3;
    } else if (session.done[0]) {
      activeStage = 2;
    } else {
      activeStage = 1;
    }
  }

  return (
    <ol className="ribbon" aria-label="Learning stages">
      {stages.map((stage, index) => (
        <li
          key={stage}
          aria-current={activeStage === index ? "step" : undefined}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>

          {stage}
        </li>
      ))}
    </ol>
  );
}
