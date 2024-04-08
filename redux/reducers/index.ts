import { combineReducers } from "redux";
import movieReducer from "@/redux/reducers/movieReducer";
import authReducer from "@/redux/reducers/authReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  auth: authReducer,
});

export default rootReducer;
