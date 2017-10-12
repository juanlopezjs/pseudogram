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
        if(nextProps.match.url !== this.props.match.url){
            nextProps.loadPerfil(nextProps.match.params.id).then(result =>{
             this.foundPage = result;
         })
        }   
    }

    render(){
        let {perfil} = this.props.perfil;

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
