export const motionTokens = {
  ease: [0.16, 1, 0.3, 1] as const,
  cinematic: [0.22, 1, 0.36, 1] as const,
  press: [0.15, 0.85, 0.2, 1] as const,
  // Signature Aurentra triangular spring formula
  triangularSpring: {
    type: "spring" as const,
    stiffness: 240,
    damping: 26,
    mass: 0.75,
  },
  duration: {
    fast: 0.22,
    base: 0.42,
    reveal: 0.68,
    scene: 0.98,
  },
  stagger: {
    tight: 0.05,
    base: 0.10,
    scene: 0.14,
  },
};

export const revealTransition = {
  duration: motionTokens.duration.reveal,
  ease: motionTokens.cinematic,
};

export const hoverSpring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 28,
  mass: 0.55,
};

// Signature "Aurentra Motion" Directional Transitions
export const aurentraDirectional = (index: number) => {
  const directions = [
    { x: -16, y: 12 },  // Bottom-Left reveal
    { x: 0, y: 18 },    // Pure vertical bottom reveal
    { x: 16, y: 12 },   // Bottom-Right reveal
  ];
  const selected = directions[index % directions.length];
  
  return {
    initial: { 
      opacity: 0.01, 
      x: selected.x, 
      y: selected.y, 
      scale: 0.992 
    },
    animate: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      scale: 1 
    },
    transition: {
      duration: motionTokens.duration.reveal,
      ease: motionTokens.cinematic,
      delay: index * motionTokens.stagger.base,
    }
  };
};

// Signature "Aurentra" Cinematic Hover Sweep Config
export const glowSweepTransition = {
  initial: { backgroundPosition: "-200% 0" },
  animate: { backgroundPosition: "200% 0" },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  }
};
