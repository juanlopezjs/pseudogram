import React,{Component} from 'react';



class Profile extends Component {

    componentWillMount() {
        this.props.loadPerfil(this.props.match.params.id)
    }

    render(){
        let perfil = this.props.perfil.perfil == null ? ("") : this.props.perfil.perfil;
        return (   
            <header>
                <div>
                    <div>
                        <img src={perfil.photoURL} alt={perfil.usuario} />
                    </div>
                </div>
                <div>
                    <div>
                        <h1>{perfil.usuario}</h1>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div></div>
                </div>
            </header>
        )
    }
}

export default Profile;