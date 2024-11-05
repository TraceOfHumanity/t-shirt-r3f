import { AccumulativeShadows } from "@react-three/drei";
import React from "react";

export const Backdrop = () => {
  return <AccumulativeShadows temporal frames={60}></AccumulativeShadows>;
};
