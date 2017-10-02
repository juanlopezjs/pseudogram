import React, {Component} from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import {loadPerfil} from '../actions/profileAction'
import NotFound from '../components/NotFound';

class ProfileContainer extends Component{

    constructor(props){
        super(props)
        this.foundPage = true;
    }

    componentWillMount() {
        let usuario = this.props.match.params.id;
         this.props.loadPerfil(usuario).then(result =>{
             this.foundPage = result;
         })
    }

   

    render(){
        let perfil = this.props.perfil;

        if(!this.foundPage){
            return(<NotFound />)
        }

        if(perfil != null){
            return (
                <Profile {...this.props}/>
            )
        }else{
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        perfil: state.perfil,
        picturesPerfil: state.picturesPerfil
    }
};

export default connect(
    mapStateToProps, 
    {
        loadPerfil
    }
)(ProfileContainer);
