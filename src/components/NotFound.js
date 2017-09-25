import React from 'react';

const style = {
    textAlign: 'center',
    marginTop: '95px'
}

const NotFound = () => {
    return (
        <div style={style}>
            <h2>Esta página no está disponible.</h2>
            <p>Es posible que el enlace que seguiste esté roto o que se haya eliminado la página.</p>
        </div>
    )
}

export default NotFound;