import React from 'react';
import {Switch} from "react-router-dom";

const ContenView = ({data}) =>(
    <Switch>
    {
        data.map((contentView, i) =>(
            <contentView.component {...contentView.attr} key={i}/>
        ))
    }
    </Switch>
)

export default ContenView;

