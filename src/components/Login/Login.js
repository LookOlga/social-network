import React from "react";

import './login.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validation/validator";
import {login, logout} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        const {email, password, rememberMe} = formData;
        props.login(email, password, rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className="login">
            <div className="login__wrapper">
                <h2 className="login__title">Login</h2>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

const LoginForm = (props) => {
    const {handleSubmit, error} = props;
    return (
        <form onSubmit={handleSubmit} className="form login__form">
            <Field type={"text"}
                   placeholder="e-mail"
                   className="login__input"
                   component={Input}
                   name={"email"}
                   validate={[required]}/>
            <Field type={"password"} placeholder="password" className="login__input" component={Input} name={"password"}
                   validate={[required]}/>
            <div className="login__input-group input-group">
                <Field id="remember"
                       type={"checkbox"}
                       className="login__checkbox"
                       component={Input}
                       name={"rememberMe"}/>
                <label htmlFor="remember">remember me</label>
            </div>
            {error && <div className="form-common-error">{error}</div>}
            <button className="login__btn primary-btn">Sign in</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const LoginContainer = connect(mapStateToProps, {login, logout})(Login);

export default LoginContainer;
