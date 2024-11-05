import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import React, {useRef} from "react";

export const CameraRig = ({children}) => {
  const group = useRef();
  useFrame((state, delta) => {
    // group.current.rotation.y += 0.003;
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
};
