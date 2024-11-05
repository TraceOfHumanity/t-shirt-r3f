import {proxy} from "valtio";

const state = proxy({
  intro: true,
  decal: "three",
});

export {state};
