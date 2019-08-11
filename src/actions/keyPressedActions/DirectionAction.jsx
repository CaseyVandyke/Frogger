import { UP, DOWN, LEFT, RIGHT } from "./constants";

export const upAction = () => {
  return {
    type: UP
  };
};

export const downAction = () => {
  return {
    type: DOWN
  };
};

export const leftAction = () => {
  return {
    type: LEFT
  };
};

export const rightAction = () => {
  return {
    type: RIGHT
  };
};
