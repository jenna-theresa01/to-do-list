import React, { useState } from "react";

export default function TabGroups () {

    const tabGroupStyle = {
        justifyContent: 'center',
        display: 'flex', 
        padding: '10px',
    }

    return(
        <div style={tabGroupStyle}>
            <button className="btn btn-info">All</button>
            <button className="btn btn-info">To-Do</button>
            <button className="btn btn-info">To-Done</button>
        </div>
    )
}