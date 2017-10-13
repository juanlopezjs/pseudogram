import React from 'react';
import Dialog from 'material-ui/Dialog';

const Dialogs = (props) =>{
    let {open} = props.dialog;
    console.log(props)
    return (
        <Dialog open={open} onRequestClose={props.handleRequestClose}>
            { props.children}
        </Dialog>
    )
}

export default Dialogs;