import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

let store = {
  _state : {
    profilePage: {
      posts: [
        {
          id: 1,
          name: "Sasha Torn",
          postText:"Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная)."
        },
        {
          id: 2,
          name: "Hope Smith",
          postText:"Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры."
        }

      ],
      newPostText: "What's new?"
    },
    messagesPage: {
      dialogs: [
        {id: 1, name:"John"},
        {id: 2, name:"Antony"},
        {id: 3, name:"Mia"},
        {id: 4, name:"Jessica"},
        {id: 5, name:"Alex"}
      ],
      messages:[
        {message: "Hi!"},
        {message: "Hello!"},
        {message: "How are you?"},
        {message: "Thanks, I'm fine."}
      ],
      newMessageBody: ''
    },
    sidebar: {
      friends: [
        {
          name: "Sasha Torn"
        },
        {
          name: "Hope Smith"
        },
        {
          name: "John Campbell"
        },
        {
          name: "Alex Vega"
        },
        {
          name: "Tom Burkard"
        },
        {
          name: "Billy Torton"
        }
      ]
    }

  },
  _callSubscriber () {
    console.log('Go!');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);

  }
}

export default store;