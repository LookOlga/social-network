import React from "react";
import {getAuthUserData} from "./authReducer";

const SET_INITIALIZING = 'SET-INITIALIZING ';

let initialState = {
    initializing: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZING : {
            let stateCopy = {
                ...state,
                initializing: true
            }
            return stateCopy;
        }
        default :
            return state;
    }
}

export const setInitializing = () => ({
    type: SET_INITIALIZING
})

export const initialize = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
            dispatch(setInitializing());
        })
    }

}

export default appReducer;