import loggedReducer from "./loggedReducer";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import submittedReducer from "./submittedReducer";
import { combineReducers } from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr'

/**
 * Represents a single reducer that contains all the reducers.
 */
const allReducers = combineReducers({
  loggedIn: loggedReducer,
  user: userReducer,
  files: fileReducer,
  submitted: submittedReducer,
  toastr: toastrReducer
});

export default allReducers;
