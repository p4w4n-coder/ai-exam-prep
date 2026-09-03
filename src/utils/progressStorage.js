const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 1 week

function safeGet(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed.savedAt !== "number") return null;
    if (Date.now() - parsed.savedAt > EXPIRY_MS) {
      localStorage.removeItem(key);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function safeSet(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ ...data, savedAt: Date.now() }));
  } catch {
    // localStorage unavailable/full — progress just won't resume, not a crash
  }
}

function safeRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

const APP_STATE_KEY = "aier_app_state";

export function saveAppState(page, quizId) {
  safeSet(APP_STATE_KEY, { page, quizId });
}

export function loadAppState() {
  return safeGet(APP_STATE_KEY);
}

export function clearAppState() {
  safeRemove(APP_STATE_KEY);
}

function quizProgressKey(quizId) {
  return `aier_quiz_progress_${quizId}`;
}

export function saveQuizProgress(quizId, data) {
  safeSet(quizProgressKey(quizId), data);
}

export function loadQuizProgress(quizId) {
  return safeGet(quizProgressKey(quizId));
}

export function clearQuizProgress(quizId) {
  safeRemove(quizProgressKey(quizId));
}
