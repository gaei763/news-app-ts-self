import { Article } from "./Article";

export type AddClipAction = {
  type: "ADD_CLIP";
  clip: Article;
};
export type DeleteClipAction = {
  type: "DELETE_CLIP";
  clip: Article;
};
export type UpdateMemoAction = {
  type: "UPDATE_MEMO";
  clip: Article;
};

export type Actions =
  // user
  AddClipAction | DeleteClipAction | UpdateMemoAction;
