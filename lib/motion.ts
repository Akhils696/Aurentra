export const motionTokens = {
  ease: [0.22, 1, 0.36, 1] as const,
  cinematic: [0.16, 1, 0.3, 1] as const,
  press: [0.2, 0.8, 0.2, 1] as const,
  // Signature Aurentra triangular spring formula
  triangularSpring: {
    type: "spring" as const,
    stiffness: 180,
    damping: 20,
    mass: 0.8,
  },
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
