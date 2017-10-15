import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

const settingsUser = (props) => {
    let {arrayActions} = props;
    if(arrayActions.length > 0){
        return(
            <List className="list">
            {
                arrayActions.map((arrayItem, i) =>(
                    <ListItem className="listItem" {...(arrayItem.disabled !== true && {button : true})} key={i}>
                        <ListItemText className="listText" {...(arrayItem.disabled === true && {className:"listTextDisabled"})} primary={arrayItem.item}  onClick={arrayItem.action}/>
                    </ListItem>
                ))
            }
            </List>
        )
    }else{
        return null;
    }
}

export default settingsUser;