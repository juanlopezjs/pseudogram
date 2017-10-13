const dialog = (state = { open: false, content : null }, action) => {
    switch (action.type) {
        case 'OPEN_DIALOG':
            return Object.assign({}, state, { open: action.open })
        case 'CONTENT_DIALOG':
            return Object.assign({}, state, {content: action.content})
        default:
            return state
    }
}

export default dialog;