import React from 'react';
import ReactDOM from "react-dom";

import './index.css';
import MainApp from "./App";




ReactDOM.render(
   <MainApp />,
    document.getElementById('root')
);


// let rerenderEntireTree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }
//
// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });


