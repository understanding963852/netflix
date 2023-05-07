import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; //reducers/indexCom를 가져옴

//composeWithDevTools는 개발을 도와주는 툴composeWithDevTools(미들웨어)
let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
