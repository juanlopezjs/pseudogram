import { findDOMNode } from 'react-dom';

export const togglePopover = (element) => {
    console.log(element)
    console.log(findDOMNode(element))
    return dispatch => {
        dispatch(
            { type: "OPEN_POPOVER", open: true },
            { type: "ANCHOR_EL", anchorEl: findDOMNode(element) }
        )
    }
}

export const handleRequestClose = () => {
    return dispatch => {
        dispatch({ type: "OPEN_POPOVER", open: false })
    }
};