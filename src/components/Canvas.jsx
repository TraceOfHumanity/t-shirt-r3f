import React from "react";
import {Canvas} from "@react-three/fiber";
import {Shirt} from "./Shirt";
import {Center, Environment} from "@react-three/drei";
import {CameraRig} from "./CameraRig";

export const CanvasR3F = ({position = [0, 0, 2.5], fov = 25}) => {
  return (
    <Canvas
      gl={{preserveDrawingBuffer: true}}
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{position, fov}}
      shadows
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Center>
          <Shirt />
          {/* <Backdrop /> */}
        </Center>
      </CameraRig>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};
