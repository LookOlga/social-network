import {usersAPI} from "../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
            return stateCopy;
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
            return stateCopy;
        }
        case SET_USERS: {
            let stateCopy = {
                ...state,
                users: action.users
            }
            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
            let stateCopy = {
                ...state,
                currentPage: action.currentPage
            }
            return stateCopy;
        }
        case SET_TOTAL_USERS_COUNT: {
            let stateCopy = {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
            return stateCopy;
        }
        case TOGGLE_IS_FETCHING: {
            let stateCopy = {
                ...state,
                isFetching: action.isFetching
            }
            return stateCopy;
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            let stateCopy = {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id != action.userId)
            }
            return stateCopy;
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}
export const unfollowUser = (userId) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.unfollowUser.bind(usersAPI);
        const actionCreator = unfollow;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

export const followUser = (userId) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.followUser.bind(usersAPI);
        const actionCreator = follow;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

// export const unfollowUser = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleIsFollowingProgress(true, userId));
//         const data = await usersAPI.unfollowUser(userId);
//         if (data.resultCode === 0) {
//             dispatch(unfollow(userId));
//         }
//         dispatch(toggleIsFollowingProgress(false, userId));
//     }
// }
//
// export const followUser = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleIsFollowingProgress(true, userId));
//         const data = await usersAPI.followUser(userId);
//         if (data.resultCode === 0) {
//             dispatch(follow(userId));
//         }
//         dispatch(toggleIsFollowingProgress(false, userId));
//     }
// }

export default usersReducer;