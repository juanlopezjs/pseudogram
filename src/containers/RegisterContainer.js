import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerButton } from '../actions/registerAction';
import Register from '../components/Register';
import {redirectHome } from '../actions/loginAction';

const RegisterContainer = (props) => {

    props.redirectHome();
    const { from } = props.location.state || { from: { pathname: '/' } }
    const redirectToReferrer = props.redirectToReferrer;

    if (redirectToReferrer) {
        return (
            <Redirect to={from} />
        )
    }

    return(
        <Register {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        redirectToReferrer: state.login.redirectToReferrer
    }
};

export default connect(
    mapStateToProps, 
    {
        registerButton,
        redirectHome
    }
)(RegisterContainer);
