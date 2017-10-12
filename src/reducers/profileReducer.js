const perfil = (state = {perfil : null, picturesPerfil : []}, action) => {
    switch (action.type) {
        case 'PERFIL':
            return Object.assign({}, state, { perfil: action.perfil})
        case 'LOAD_PICTURES_PERFIL':
            return Object.assign({}, state, { picturesPerfil: action.pictures})
        default:
            return state
    }
}

export default perfil;
