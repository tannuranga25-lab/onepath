export const catalog = {
  javascript: {
    title: "JavaScript API Explorer",
    topic: "JavaScript",
    resource: "MDN — Using Fetch",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
    tasks: [
      "Read how fetch and response.json() work.",
      "Build a product list using sample JSON data.",
      "Add loading and error states.",
    ],
    hint: "Start by displaying a single product from a local array before fetching remote data.",
  },

  react: {
    title: "Personal Task Board",
    topic: "React",
    resource: "React — State: A Component’s Memory",
    url: "https://react.dev/learn/state-a-components-memory",
    tasks: [
      "Read how useState updates a component.",
      "Build a form that adds tasks to a list.",
      "Add a complete action and persist tasks locally.",
    ],
    hint: "First render a fixed list of two tasks. Then introduce state and an add button.",
  },
};

export function choosePath(problem, topic) {
  if (topic !== "auto") return topic;

  if (/react|component|usestate|jsx/i.test(problem)) {
    return "react";
  }

  if (/javascript|fetch|\bjs\b|\bapi\b|async/i.test(problem)) {
    return "javascript";
  }

  return null;
}

export function loadSession() {
  try {
    const session = JSON.parse(localStorage.getItem("onepath-session-v1"));

    return session &&
      Object.hasOwn(catalog, session.key) &&
      Array.isArray(session.done) &&
      session.done.length === 3
      ? session
      : null;
  } catch {
    return null;
  }
}
