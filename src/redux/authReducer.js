import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            let stateCopy = {
                ...state,
                ...action.payload,
            }
            return stateCopy;
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.getUserData()
    if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}


export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.logIn(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong'
        const action = stopSubmit('login', {_error: message});
        dispatch(action);
    }
}


export const logout = () => async (dispatch) => {
    const data = await authAPI.logOut();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


// export const logout = () => {
//     return (dispatch) => {
//         authAPI.logOut().then(data => {
//             if(data.resultCode === 0) {
//                 dispatch(setAuthUserData(null, null, null, false))
//             }
//         })
//     }
// }

export default authReducer;