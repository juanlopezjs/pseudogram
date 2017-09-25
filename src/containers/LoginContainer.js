import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginButton, redirectHome } from '../actions/loginAction';
import Login from '../components/Login';


const LoginContainer = (props) => {

    props.redirectHome();
    const { from } = props.location.state || { from: { pathname: '/' } }
    const redirectToReferrer = props.redirectToReferrer;

    if (redirectToReferrer) {
        return (
            <Redirect to={from} />
        )
    }

    return (
        <Login {...props}/>
    );
}

const mapStateToProps = (state) => {
    return {
        redirectToReferrer: state.login.redirectToReferrer
    }
};

export default connect(
    mapStateToProps, 
    {
        loginButton,
        redirectHome
    }
)(LoginContainer);
