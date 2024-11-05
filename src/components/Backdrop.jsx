import {AccumulativeShadows, RandomizedLight} from "@react-three/drei";
import React from "react";

export const Backdrop = () => {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      // toneMapped
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.15]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.5}
        ambient={0.2}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.5}
        ambient={0.2}
        position={[-5, -5, -10]}
      />
    </AccumulativeShadows>
  );
};
