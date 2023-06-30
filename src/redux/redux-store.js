import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers(
  {
   profilePage: profileReducer,
   messagePage: messagesReducer,
   usersPage: usersReducer,
  }
)

let store = legacy_createStore(reducers);

export default store;