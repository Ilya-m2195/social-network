import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers(
  {
   profilePage: profileReducer,
   messagePage: messagesReducer,
  }
)

let store = legacy_createStore(reducers);

export default store;