import React, {Component} from 'react';

import './messages.css';
import {NavLink, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validation/validator";


const maxLength100 = maxLengthCreator(100);
const Messages = (props) => {
    let state = props.messagesPage;
    const messageElements = state.messages.map(message => <li key={message.id} className="messages__item">{message.message}</li>);
    const dialogElements = state.dialogs.map(dialog =>
        <li key={dialog.id} className="dialogs__item">
            <div className="dialogs__avatar">
                <img src="https://images.app.goo.gl/x1HjNjZABTm4CZ3C7"/>
            </div>
            <NavLink to={"/dialogs/" + dialog.id}>{dialog.name}</NavLink>
        </li>);


    const sendNewMessage = (values) => {
        props.addNewMessage(values.newMessage);
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>
    return (
       <div className="messages__wrapper">
            <h3 className="component__title">Dialogs</h3>
          <div className="messages__content">
              <div className="dialogs">
                  <ul className="dialogs__items">
                      {dialogElements}
                  </ul>
              </div>
              <div className="messages">
                  <ul className="messages__items">
                      {messageElements}
                  </ul>
              </div>
              {/*<DialogItems dialogs={props.state.dialogs}/>*/}
              {/*  <MessageItems messages={props.state.messages} />*/}
          </div>
           <MessagesReduxForm onSubmit={sendNewMessage}/>
       </div>
    )
}
const MessagesForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit} className="message-form">
           <Field className="message-form__field"
                        placeholder="Write your message..."
                        component={Textarea}
                        name={"newMessage"}
                        validate={[required, maxLength100]}/>
            <button className="message-form__btn">Send</button>
        </form>
    )
}

const MessagesReduxForm = reduxForm({
    form: 'messages'
})(MessagesForm);

export default Messages;