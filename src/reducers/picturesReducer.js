export const pictures = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_PICTURES':
            return state.concat(action.pictures)
        default:
            return state
    }
}

export const fileUpload = (state = { uploadValue: 0 }, action) => {
    switch (action.type) {
        case 'UPLOAD_PICTURE':
            return Object.assign({}, state, { uploadValue: action.uploadValue })
        default:
            return state
    }
}