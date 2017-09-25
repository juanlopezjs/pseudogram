import React,{Component} from 'react';
import Progress from 'react-progress';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/FileUpload';

const style = {
    marginRight: 0,
    margin: 0,
    bottom: 30,
    right: 40,
    position: 'fixed'
};

class FileUpload extends Component {
    
    render(){
        return (
            <div className="file">
                <div>
                    <Progress color="#3897f0" percent={this.props.uploadValue} />
                </div>
                <input accept="jpg,jpeg,JPG,JPEG" className="file-input" id="file" multiple type="file" onChange={this.props.handleUpload.bind(this)} ref="file" />
                <label htmlFor="file">
                    <Button fab raised className="upload" component="span" style={style}>
                        <AddIcon />
                    </Button>
                </label>
            </div>
        )
    }
}

export default FileUpload;
    