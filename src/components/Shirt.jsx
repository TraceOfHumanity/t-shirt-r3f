import {useGLTF} from "@react-three/drei";
import React from "react";
import {state} from "../storage";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import {useSnapshot} from "valtio";

export const Shirt = (props) => {
  const snap = useSnapshot(state);
  const {nodes, materials} = useGLTF("/tshirt.glb");

  // materials.Material.color = new THREE.Color(state.color);
  useFrame((state, delta) => {
    easing.dampC(materials.Material.color, snap.color, 0.2, delta);
  });

  return (
    // <group {...props} dispose={null} position={[0, -0.1, 0]}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_2.geometry}
      material={materials.Material}
      // material-roughness={0}
      {...props}
      dispose={null}
      position={[0, -0.1, 0]}
    />
    // </group>
  );
};

useGLTF.preload("/tshirt.glb");
