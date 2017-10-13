const dialog = (state = { open: false }, action) => {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return Object.assign({}, state, { open: action.open })
        default:
            return state
    }
}

export default dialog;