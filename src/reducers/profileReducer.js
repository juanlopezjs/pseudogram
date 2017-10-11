export const perfil = (state = null, action) => {
    switch (action.type) {
        case 'PERFIL':
            return Object.assign({}, state, action.perfil)
        default:
            return state
    }
}

export const picturesPerfil = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_PICTURES_PERFIL':
            return state.concat(action.pictures)
        default:
            return state
    }
}