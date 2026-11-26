import { catalog } from "../learning.js";

export default function PathCard({ session, update }) {
  const path = catalog[session.key];
  const total = path.tasks.length;
  const count = session.done.filter(Boolean).length;

  function toggleTask(index, checked) {
    update({
      ...session,
      done: session.done.map((value, i) => (i === index ? checked : value)),
    });
  }

  function toggleHint() {
    update({
      ...session,
      stuck: !session.stuck,
    });
  }

  return (
    <section className="card path" aria-labelledby="path-title">
      <div className="eyebrow">02 / YOUR LEARNING PATH</div>

      <h2 id="path-title">{path.title}</h2>

      <p className="muted">
        {path.topic} · Guided practice · {session.level}
      </p>

      <div className="resource">
        <span className="eyebrow">LEARN FIRST</span>

        <a href={path.url} target="_blank" rel="noreferrer">
          {path.resource} ↗
        </a>
      </div>

      <h3>Build something real</h3>

      <div className="progress-label">
        <label htmlFor="progress">Your progress</label>
        <strong>
          {count} / {total}
        </strong>
      </div>

      <progress id="progress" max={total} value={count} />

      <div className="tasks">
        {path.tasks.map((task, index) => (
          <label className="task" key={task}>
            <input
              type="checkbox"
              checked={session.done[index]}
              onChange={(event) => toggleTask(index, event.target.checked)}
            />

            <span>{task}</span>
          </label>
        ))}
      </div>

      <button
        className="secondary"
        onClick={toggleHint}
        aria-expanded={session.stuck}
      >
        {session.stuck ? "Hide hint" : "I’m stuck — show a smaller step"}
      </button>

      {session.stuck && <p className="hint">{path.hint}</p>}

      <p role="status" className="muted">
        {count === total
          ? "All steps completed! Review your working project."
          : "Check off each step after you finish it."}
      </p>
    </section>
  );
}
