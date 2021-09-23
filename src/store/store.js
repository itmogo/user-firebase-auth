//import { createStore } from 'redux';
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import userReducer from "../reducers/usersReducer";
import {
  getFirebase,
  reduxReactFirebase,
  firebaseReducer,
} from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config";
import thunk from "redux-thunk";

const reducer = combineReducers({
  userState: userReducer,
  firebaseState: firebaseReducer,  
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
  )
);

export default store;
