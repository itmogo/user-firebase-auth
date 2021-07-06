import { createStore } from 'redux';
import {createStore, compose, applyMiddleware } from 'redux';
import userReducer from '../reducers/usersReducer';
import {getFirebase, reduxReactFirebase} from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebase from '../firebase/config';

import thunk from 'redux-thunk';



const store = createStore(
    userReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxReactFirebase(firebase),
        reduxFirestore(firestore)
    )    
    );

export default store;
