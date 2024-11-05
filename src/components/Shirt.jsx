import {useGLTF} from "@react-three/drei";
import React from "react";

export const Shirt = (props) => {
  const {nodes, materials} = useGLTF("/tshirt.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Material}
      />
    </group>
  );
};

useGLTF.preload("/tshirt.glb");
