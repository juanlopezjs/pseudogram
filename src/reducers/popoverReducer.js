const popover = (state = { anchorEl: null, open: false }, action) => {
    switch (action.type) {
        case 'ANCHOR_EL':
            return {...state, anchorEl: action.anchorEl }
        case 'OPEN_POPOVER':
            return {...state, open: action.open }
        default:
            return state
    }
}

export default popover;