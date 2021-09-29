const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: "John"},
        {id: 2, name: "Antony"},
        {id: 3, name: "Mia"},
        {id: 4, name: "Jessica"},
        {id: 5, name: "Alex"}
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello!"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Thanks, I'm fine."}
    ]
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE : {
            let message = {
                id: 6,
                message: action.newMessage
            }
            let stateCopy = {
                ...state,
                messages: [...state.messages, message]
            };
            return stateCopy;

        }
        default : {
            return state;
        }
    }

}

export const addNewMessageBodyCreator = (newMessage) => {
    return {
        type: ADD_MESSAGE,
        newMessage
    }
}

export default messagesReducer;