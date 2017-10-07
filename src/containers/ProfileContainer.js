import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loadPerfil, btnSeguir, userFollowed} from '../actions/profileAction'

/** COMPONENTS **/
import HeaderProfile from '../components/HeaderProfile';
import PicturesProfile from '../components/PicturesProfile';
import NotFound from '../components/NotFound';

const style = {
    textAlign: 'center'
}

class ProfileContainer extends Component{

    constructor(props){
        super(props)
        this.foundPage = true;
    }

    componentDidMount() {
        let usuario = this.props.match.params.id;
         this.props.loadPerfil(usuario).then(result =>{
             this.foundPage = result;
         })
    }
  
    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.id !== this.props.match.params.id){
            this.forceUpdate();
        }
        
    }

    render(){
        let perfil = this.props.perfil;

        if(!this.foundPage){
            return(<NotFound />)
        }

        if(perfil != null){
            return (
                <article style={style}>
                    <HeaderProfile {...this.props}/>
                    <PicturesProfile {...this.props}/>
                </article>
            )
        }else{
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        perfil: state.perfil,
        picturesPerfil: state.picturesPerfil,
        user: state.user
    }
};

export default connect(
    mapStateToProps, 
    {
        loadPerfil,
        btnSeguir,
        userFollowed
    }
)(ProfileContainer);
