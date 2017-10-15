
export const togglePopover = (event) => {
    event.preventDefault();
    
    return dispatch => {
        dispatch(
            { type: "OPEN_POPOVER", open: true },
            { type: "ANCHOR_EL", anchorEl: event.currentTarget}
        )
    }
}

export const handleRequestClose = () => {
    return dispatch => {
        dispatch({ type: "OPEN_POPOVER", open: false })
    }
};