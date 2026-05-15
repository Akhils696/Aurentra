export const motionTokens = {
  ease: [0.22, 1, 0.36, 1] as const,
  cinematic: [0.16, 1, 0.3, 1] as const,
  press: [0.2, 0.8, 0.2, 1] as const,
  duration: {
    fast: 0.24,
    base: 0.46,
    reveal: 0.72,
    scene: 1.05,
  },
  stagger: {
    tight: 0.06,
    base: 0.11,
    scene: 0.16,
  },
};

export const revealTransition = {
  duration: motionTokens.duration.reveal,
  ease: motionTokens.cinematic,
};

export const hoverSpring = {
  type: "spring" as const,
  stiffness: 260,
  damping: 24,
  mass: 0.62,
};
