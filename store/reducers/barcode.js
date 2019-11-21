import { SCANNED } from "../types";

export default function(state = "123345", action) {
  switch (action.type) {
    case SCANNED:
      return action.code;
    default:
      return state;
  }
}
