import {AccumulativeShadows, RandomizedLight} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import React, {useRef} from "react";

export const Backdrop = () => {
  const shadows = useRef();

  useFrame((state, delta) => {
    easing.dampC(
      shadows.current.getMesh().material.color,
      state.color,
      0.25,
      delta
    );
  });
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={90}
      alphaTest={0.85}
      // toneMapped
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.15]}
      scale={10}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      {/* <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.55}
        ambient={0}
        position={[-5, -5, -10]}
      /> */}
    </AccumulativeShadows>
  );
};
