import { useState } from "react";
import { choosePath, catalog } from "../learning.js";

export default function ProblemForm({ session, onSubmit }) {
  const [problem, setProblem] = useState(session?.problem || "");

  const [topic, setTopic] = useState(session?.key || "auto");

  const [level, setLevel] = useState(session?.level || "Beginner");

  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanProblem = problem.trim();

    if (cleanProblem.length < 10) {
      setError("Describe your difficulty in at least 10 characters.");
      return;
    }

    const key = choosePath(cleanProblem, topic);

    if (!key || !Object.hasOwn(catalog, key)) {
      setError("Please choose JavaScript or React.");
      return;
    }

    setError("");

    onSubmit({
      key,
      problem: cleanProblem,
      level,
      done: catalog[key].tasks.map(() => false),
      stuck: false,
    });
  }

  return (
    <section className="card" aria-labelledby="form-title">
      <div className="eyebrow">01 / START HERE</div>

      <h2 id="form-title">What’s holding you back?</h2>

      <p className="muted">Tell us about your learning challenge.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="problem">Your learning problem</label>

        <textarea
          id="problem"
          rows={5}
          maxLength={600}
          value={problem}
          onChange={(event) => setProblem(event.target.value)}
          placeholder="I know JavaScript basics, but I struggle to use APIs…"
          aria-describedby={error ? "form-error" : undefined}
          required
        />

        <div className="fields">
          <div>
            <label htmlFor="topic">Topic</label>

            <select
              id="topic"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              aria-describedby={error ? "form-error" : undefined}
            >
              <option value="auto">Detect topic</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React</option>
            </select>
          </div>

          <div>
            <label htmlFor="level">Experience</label>

            <select
              id="level"
              value={level}
              onChange={(event) => setLevel(event.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
            </select>
          </div>
        </div>

        {error && (
          <p role="alert" id="form-error" className="error">
            {error}
          </p>
        )}

        <button className="primary" type="submit">
          Find my next step
          <span aria-hidden="true">→</span>
        </button>

        <p className="small muted">
          Rule-based prototype · Supports JavaScript and React. Experience is
          recorded for future personalization.
        </p>
      </form>
    </section>
  );
}
