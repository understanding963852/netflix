import { combineReducers } from "redux"; //많은 reducer를 합치는작업
import movieReducer from "./movieReducer";

//export default combineReducers({객체})
//reducer를 combineReducers를 통해 store에 전달된다.
export default combineReducers({
  movie: movieReducer,
});
