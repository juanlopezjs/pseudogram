export const openToast = (open) => {
    return {
        type: 'OPEN',
        open
    }
}

export const messagesLoad = (message) => {
    return {
        type: 'MESSAGE',
        message
    }
}

export const handleRequestClose = () => (dispatch) => {
    dispatch(openToast(false))
    dispatch(messagesLoad(''))
}