import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

/* Reducers */
import { user, login } from '../reducers/userReducer';
import { pictures, fileUpload } from '../reducers/picturesReducer';
import perfil from '../reducers/profileReducer';
import toast from '../reducers/toastReducer';
import popover from '../reducers/popoverReducer';
import dialog from '../reducers/dialogReducer';

const reducers = combineReducers({
    login,
    user,
    pictures,
    fileUpload,
    toast,
    perfil,
    popover,
    dialog
});

const logger = store => next => action => {
    let result = next(action)
    return result
}

const middlewares = applyMiddleware(promise(), logger, thunk)

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middlewares
)

export default store;