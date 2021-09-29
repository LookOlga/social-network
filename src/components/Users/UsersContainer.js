import React from "react";
import {connect} from "react-redux";

import {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers, followUser, unfollowUser
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingProgress, getPageSize,
    getTotalUsersCount,
    getUsersList
} from "../../redux/usersSelectors";

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        const {getUsers, currentPage, pageSize} = this.props;
        getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {getUsers, pageSize} = this.props;
        getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   isFollowingProgress={this.props.isFollowingProgress}
                   followUser={this.props.followUser}
                   unfollowUser={this.props.unfollowUser}
            />
        </>

    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersList(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageActionCreator(currentPage));
//         },
//         setUsersTotalCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalUsersCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching));
//         }
//     }
// }

// const AuthRedirectComponent = withAuthRedirect(UsersContainerAPI);
// const UsersContainer = connect(mapStateToProps,
//     {
//         follow,
//         unfollow,
//         setCurrentPage,
//         toggleIsFollowingProgress,
//         getUsers,
//         followUser,
//         unfollowUser
//     }
//     )(AuthRedirectComponent);

const UsersContainer = compose(
    connect(mapStateToProps,
        {
            follow, unfollow, setCurrentPage,
            toggleIsFollowingProgress, getUsers, followUser, unfollowUser
        }),
    withAuthRedirect
)(UsersContainerAPI)

export default UsersContainer;