import React from 'react';
import { connect } from 'react-redux';
import ListFile from '../components/ListFile';
import FileUpload from '../components/FileUpload';
import { handleUpload } from '../actions/homeAction';


const Home = (props) => {

    return (
        <div>
            <FileUpload {...props}/>
            <ListFile user={props.user} pictures={props.pictures} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        pictures: state.pictures,
        uploadValue: state.fileUpload.uploadValue
    }
};

export default connect(
    mapStateToProps, 
    {
        handleUpload
    }
)(Home);
