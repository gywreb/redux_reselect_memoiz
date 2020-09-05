import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from "./todos/todos";

const reducer = combineReducers({
  todos: todosReducer,
});

export default reducer;
