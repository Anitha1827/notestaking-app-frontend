import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./user/user.reducer";
import thunk from "redux-thunk";
import { noteReducer } from "./notes/note.reducer";

let rootReducer = combineReducers({
  userReducer: userReducer,
  noteReducer: noteReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
