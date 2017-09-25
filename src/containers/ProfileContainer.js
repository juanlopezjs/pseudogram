import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import {loadPerfil} from '../actions/profileAction'

const style = {
    textAlign: 'center',
    marginTop: '95px'
}

const ProfileContainer = (props) => {

    return (
        <article style={style}>
            <Profile {...props}/>
        </article>
    )
}

const mapStateToProps = (state) => {
    return {
        perfil: state.perfil
    }
};

export default connect(
    mapStateToProps, 
    {
        loadPerfil
    }
)(ProfileContainer);
