const dialog = (open) => {
    return {
        type: 'OPEN_DIALOG',
        open
    }
}

const contentDialog = (content) => {
    return {
        type : 'CONTENT_DIALOG',
        content
    }
}

export const handleRequestClose = () => (dispatch) => {
    dispatch(dialog(false))
}

export const handleClickOpen = (content) => (dispatch) => {
    dispatch(contentDialog(content))
    dispatch(dialog(true))
}