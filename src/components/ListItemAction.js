import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

const settingsUser = (props) => {
    let {arrayActions} = props;
    if(arrayActions.length > 0){
        return(
            <List className={props.className}>
            {
                arrayActions.map((arrayItem, i) =>(
                    <ListItem 
                        {...arrayItem.attr} 
                        {...(arrayItem.attr.className === undefined ? {className: "listItem"} : {className: arrayItem.attr.className})} 
                        {...(arrayItem.attr.button === undefined ? {button : true} : {button: arrayItem.attr.button})} 
                        key={i}>
                        <ListItemText 
                            {...(arrayItem.attr.disabled  ? {className:"listTextDisabled"} :{className:"listText"})}
                            primary={arrayItem.item}/>
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