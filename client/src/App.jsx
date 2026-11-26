import { useState } from "react";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PathRibbon from "./components/PathRibbon.jsx";
import ProblemForm from "./components/ProblemForm.jsx";
import PathCard from "./components/PathCard.jsx";
import EmptyState from "./components/EmptyState.jsx";
import Footer from "./components/Footer.jsx";

import { useLearningSession } from "./hooks/useLearningSession.js";

export default function App() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  const { session, updateSession, storageError } = useLearningSession();

  return (
    <div className="app" data-theme={dark ? "dark" : "light"}>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Header dark={dark} onToggleTheme={() => setDark((value) => !value)} />

      <main id="main" className="shell">
        <Hero />

        <PathRibbon session={session} />

        <div className="workspace">
          <ProblemForm session={session} onSubmit={updateSession} />

          {session ? (
            <PathCard session={session} update={updateSession} />
          ) : (
            <EmptyState />
          )}
        </div>

        {storageError && (
          <p role="alert" className="error">
            Progress could not be saved in this browser.
          </p>
        )}

        <Footer />
      </main>
    </div>
  );
}
