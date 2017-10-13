import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

const settingsUser = () => {
    return(
        <List className="list">
            <ListItem button className="listItem">
                <ListItemText primary="Cambiar contraseña" className="listText"/>
            </ListItem>
            <ListItem button className="listItem">
                <ListItemText primary="Cancelar" className="listText"/>
            </ListItem>
        </List>
    )
}

export default settingsUser;