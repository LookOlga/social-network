import React, {Suspense} from "react";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from "./components/Sidebar/SidebarContainer";
// import MessagesContainer from './components/Messages/MessagesContainer';
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import LoginPage from "./components/Login/Login";
import {initialize} from "../../social-network/src/redux/appReducer";

import './App.css';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const LoginPage = React.lazy(() => import("./components/Login/Login"));


class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if(!this.props.initializing) return <Preloader/>
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <SidebarContainer/>
                <main className="app-wrapper__content">
                    <Route path="/profile/:userId?" render={() => {
                        return <Suspense fallback={<Preloader/>}>
                                    <ProfileContainer/>
                            </Suspense>
                    }}/>
                    <Route path="/messages" render={() => {
                        return <Suspense fallback={<Preloader/>}>
                            <MessagesContainer/>
                        </Suspense>
                    }}/>
                    <Route path="/users" render={() => {
                        return <Suspense fallback={<Preloader/>}>
                            <UsersContainer/>
                        </Suspense>
                    }}/>
                    <Route path="/login" render={() => {
                        return <Suspense fallback={<Preloader/>}>
                            <LoginPage/>
                        </Suspense>
                    }}/>
                </main>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        initializing: state.app.initializing
    }
}
const AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initialize}))(App);

const MainApp = (props) => {
    return   <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default MainApp;
