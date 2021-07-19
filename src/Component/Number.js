import React from 'react';
import { Chip } from "@material-ui/core";
import "../CSS/Inner.css";
function Number(props) {
    return (
        <div className="part__2__main__row">
            <h5>{props.name}</h5>
            <Chip label={props.label} size="small" />
          </div>
    )
}

export default Number;
