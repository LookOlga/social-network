import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'profile/SET-USER-STATUS';


let initialState = {
    posts: [
        {
            id: 1,
            name: "Sasha Torn",
            postText: "Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная)."
        },
        {
            id: 2,
            name: "Hope Smith",
            postText: "Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры."
        }

    ],
    profile: null,
    status: ""
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                name: "Tom Burkard",
                postText: action.newPost
            }

            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost]
            };
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            let stateCopy = {
                ...state,
                profile: action.profile
            }
            return stateCopy;
        }
        case SET_USER_STATUS: {
            let stateCopy = {
                ...state,
                status: action.status
            }
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost) => {
    return {
        type: ADD_POST,
        newPost
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}


export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
}


export const updateUserStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }

}


export default profileReducer;