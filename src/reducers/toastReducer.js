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

export default toast;