const dialog = (open) => {
    return {
        type: 'OPEN_DIALOG',
        open
    }
}

export const handleRequestClose = () => (dispatch) => {
    dispatch(dialog(false))
}

export const handleClickOpen = () => (dispatch) => {
    dispatch(dialog(true))
}