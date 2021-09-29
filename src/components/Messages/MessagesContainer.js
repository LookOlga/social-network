import React, {Component} from 'react';

import {addNewMessageBodyCreator, updateMessageBodyCreator} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessage) => {
            dispatch(addNewMessageBodyCreator(newMessage));
        }
    }
}

const MessagesContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)

// const AuthRedirectComponent = withAuthRedirect(Messages);
//
// const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessagesContainer;