import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import { handleRequestClose } from '../actions/dialogAction';

const DialogsCointainer = ({dialog, handleRequestClose }) =>{

    return (
        <Dialog open={dialog.open} onRequestClose={handleRequestClose}>
            {dialog.content !=  null &&
                <dialog.content/>
            }
        </Dialog>
    )
}

const mapStateToProps = (state) => {
    return {
        dialog: state.dialog
    }
};

export default connect(
    mapStateToProps, 
    {
        handleRequestClose
    }
)(DialogsCointainer);