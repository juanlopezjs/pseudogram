import React from 'react';
import { connect } from 'react-redux';
import { Snackbar } from 'material-ui';
import Slide from 'material-ui/transitions/Slide';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import { handleRequestClose } from '../actions/toastAction';

const ToastCointainer = (props) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={props.open}
            SnackbarContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{props.message}</span>}
            autoHideDuration={8000}
            onRequestClose={() => props.handleRequestClose()}
            transition={<Slide direction={'left'} />}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => props.handleRequestClose()}>
                    <CloseIcon />
                </IconButton>,
            ]}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.toast.message,
        open: state.toast.open,
    }
};

export default connect(
    mapStateToProps, 
    {
        handleRequestClose
    }
)(ToastCointainer);
