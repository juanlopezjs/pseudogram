import React, { Component } from 'react';
import ImageLoader from 'react-imageloader';

export default class ListFile extends Component {

    
    preloader() {
        return <img src="http://assets.motherjones.com/interactives/projects/features/koch-network/shell19/img/loading.gif" role="presentation" className="loading" />;
    }   

    render() {
        if (this.props.user) {
            return (
                <div>
                    {
                        this.props.pictures.map(picture => (
                            <div className="App-card" key={picture.id}>
                                <figure className="App-card-image">
                                    <ImageLoader
                                        src={picture.image}
                                        preloader={this.preloader}>
                                        Image load failed!
                                    </ImageLoader>

                                    <figCaption className="App-card-footer">
                                        <img className="App-card-avatar" width="48" src={picture.photoURL} alt={picture.displayName} />
                                        <span className="App-card-name">{picture.displayName}</span>
                                    </figCaption>
                                </figure>
                            </div>
                        )).reverse()
                    }
                </div>
            );
        } else {
            return (null);
        }
    }

}