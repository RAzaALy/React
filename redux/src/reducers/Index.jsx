import counter from "./Count";
import MulDiv from "./MulDiv";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  MulDiv,
});
export default rootReducer;
