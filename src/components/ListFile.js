import React, { Component } from 'react';
import ImageLoader from 'react-imageloader';

export default class ListFile extends Component {


    preloader() {
        return <img src="http://assets.motherjones.com/interactives/projects/features/koch-network/shell19/img/loading.gif" role="presentation" className="loading" />;
    }

    render() {
        return (
            <div>
                {
                    this.props.pictures.map(picture => (
                        <div className="App-card" key={picture.id}>
                            <figure className="App-card-image">
                                <figCaption className="App-card-footer">
                                    <img className="App-card-avatar" width="30" src={picture.user.photoURL} alt={picture.user.usuario} />
                                    <span className="App-card-name">{picture.user.usuario}</span>
                                </figCaption>
                                <ImageLoader
                                    src={picture.image}
                                    preloader={this.preloader}>
                                    Image load failed!
                                </ImageLoader>
                            </figure>
                        </div>
                    )).reverse()
                }
            </div>
        );
    }

}