import { Actions } from "../../types/Actions";
import { User } from "../../types/User";

const initalState: User = {
  clips: [],
};

export const reducer = (state: User = initalState, action: Actions): User => {
  switch (action.type) {
    case "ADD_CLIP":
      return {
        ...state,
        clips: [...state.clips, action.clip].filter(
          (x, i, self) => self.indexOf(x) === i
        ),
      };
    case "DELETE_CLIP":
      return {
        ...state,
        clips: state.clips.filter((clip) => {
          clip.url !== action.clip.url;
        }),
      };
    default:
      return state;
  }
};
