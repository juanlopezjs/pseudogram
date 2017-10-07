import React from 'react';
import ImageLoader from 'react-imageloader';

const preloader = () => {
    return <div className="preloadAnimated"></div>
}

const PicturesProfile = (props) => {
    return (
        <div className="grid">
        {
            props.picturesPerfil.map(picture => (
                <div className="gridPhoto" key={picture.id}>
                    <ImageLoader
                        src={picture.image}
                        preloader={preloader}>
                    </ImageLoader>
                    <div className="links">
                        <a href=""><i className="fa fa-heart"></i><span></span></a>
                        <a href=""><i className="fa fa-comment"></i><span></span></a>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default PicturesProfile;