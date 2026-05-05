"use client";

const acceptedConfettiColors = ["#0f766e", "#14b8a6", "#ccfbf1", "#ffffff"];
let confettiPromise;

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function prefersReducedMotion() {
  return (
    isBrowser() &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

async function loadConfetti() {
  if (!confettiPromise) {
    confettiPromise = import("canvas-confetti")
      .then((module) => {
        const confetti = module.default ?? module;

        return typeof confetti === "function" ? confetti : null;
      })
      .catch(() => {
        confettiPromise = null;

        return null;
      });
  }

  return confettiPromise;
}

function fireConfetti(confetti, options) {
  try {
    confetti(options)?.catch?.(() => {});
  } catch {
    // Confetti is decorative, so it should never block the status update flow.
  }
}

export async function celebrateAcceptedApplication() {
  if (!isBrowser() || prefersReducedMotion()) {
    return;
  }

  const confetti = await loadConfetti();

  if (!confetti || !isBrowser() || prefersReducedMotion()) {
    return;
  }

  const sharedOptions = {
    colors: acceptedConfettiColors,
    disableForReducedMotion: true,
    origin: { x: 0.5, y: 0.45 },
    ticks: 100,
    zIndex: 1000,
  };

  fireConfetti(confetti, {
    ...sharedOptions,
    particleCount: 58,
    spread: 64,
    startVelocity: 40,
  });

  window.setTimeout(() => {
    if (!isBrowser() || prefersReducedMotion()) {
      return;
    }

    fireConfetti(confetti, {
      ...sharedOptions,
      particleCount: 34,
      scalar: 0.85,
      spread: 92,
      startVelocity: 32,
    });
  }, 180);
}
