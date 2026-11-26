import { useState } from "react";
import { loadSession } from "../learning.js";

const STORAGE_KEY = "onepath-session-v1";

export function useLearningSession() {
  const [session, setSession] = useState(loadSession);
  const [storageError, setStorageError] = useState(false);

  function updateSession(nextSession) {
    setSession(nextSession);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession));

      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }

  return {
    session,
    updateSession,
    storageError,
  };
}
