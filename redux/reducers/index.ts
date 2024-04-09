import { combineReducers } from "redux";
import movieReducer from "@/redux/reducers/movieReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
});

export default rootReducer;
