import { Article } from "../../types/Article";
import { Actions } from "../../types/Actions";

export const addClip = (clip: Article): Actions => {
  return {
    type: "ADD_CLIP",
    clip,
  };
};

export const deleteClip = (clip: Article): Actions => {
  return {
    type: "DELETE_CLIP",
    clip,
  };
};
