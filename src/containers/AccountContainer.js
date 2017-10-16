import React from 'react';
import ListItemAction from "../components/ListItemAction";
import ContentView from "../components/ContentView";
import data from '../data/dataAccountContainer'

const AccountEdit = (props) => {
    return(
        <div className="editUser">
            <div className="listNavEdit">
                <ListItemAction  data={data.lisItems}/>
            </div>
            <div className="contentEditUser">
                <ContentView data={data.listContentView}/>
            </div>
        </div>
    )
}

export default AccountEdit;