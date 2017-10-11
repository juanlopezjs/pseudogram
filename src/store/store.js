import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


/* Reducers */
import { user, login } from '../reducers/userReducer';
import { pictures, fileUpload } from '../reducers/picturesReducer';
import { perfil, picturesPerfil } from '../reducers/profileReducer';
import toast from '../reducers/toastReducer';
import popover from '../reducers/popoverReducer';

const reducers = combineReducers({
    login,
    user,
    pictures,
    fileUpload,
    toast,
    perfil,
    picturesPerfil,
    popover
});

const logger = store => next => action => {
    let result = next(action)
    return result
}

const middlewares = applyMiddleware(logger, thunk)

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middlewares
)

export default store;