import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    redirectToReferrer: false
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE':
            return Object.assign({}, state, { redirectToReferrer: true })
        default:
            return state
    }
}

const user = (state = null, action) => {
    switch (action.type) {
        case 'USER':
            return Object.assign({}, state, action.user)
        default:
            return state
    }
}

const pictures = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_PICTURES':
            return state.concat(action.pictures)
        default:
            return state
    }
}

const fileUpload = (state = { uploadValue: 0 }, action) => {
    switch (action.type) {
        case 'UPLOAD_PICTURE':
            return Object.assign({}, state, { uploadValue: action.uploadValue })
        default:
            return state
    }
}

const toast = (state = { message: "", open: false }, action) => {
    switch (action.type) {
        case 'MESSAGE':
            return Object.assign({}, state, { message: action.message })
        case 'OPEN':
            return Object.assign({}, state, { open: action.open })
        default:
            return state
    }
}

const perfil = (state = { perfil: null, pictures: [] }, action) => {
    switch (action.type) {
        case 'PERFIL':
            return Object.assign({}, state, { perfil: action.perfil })
        case 'LOAD_PICTURES_PERFIL':
            return state.concat({ pictures: action.pictures })
        default:
            return state
    }
}


const logger = store => next => action => {
    let result = next(action)
    return result
}

export default createStore(combineReducers({
        login,
        user,
        pictures,
        fileUpload,
        toast,
        perfil
    }),
    composeWithDevTools(applyMiddleware(logger, thunk)));