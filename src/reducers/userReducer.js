const initialState = {
    redirectToReferrer: false
};

export const login = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE':
            return Object.assign({}, state, { redirectToReferrer: true })
        default:
            return state
    }
}

export const user = (state = null, action) => {
    switch (action.type) {
        case 'USER':
            return Object.assign({}, state, action.user)
        default:
            return state
    }
}