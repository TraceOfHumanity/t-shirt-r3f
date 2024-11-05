import React from "react";
import {Canvas} from "@react-three/fiber";
import {Shirt} from "./Shirt";
import {Center, Environment, OrbitControls} from "@react-three/drei";
import { Backdrop } from "./Backdrop";

export const CanvasR3F = ({position = [-1, 0, 2.5], fov = 25}) => {
  return (
    <Canvas
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{position, fov}}
    >
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <Center>
        <Shirt />
        <Backdrop />
      </Center>
      <OrbitControls />
    </Canvas>
  );
};
