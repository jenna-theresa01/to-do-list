import React, { useState } from "react";

export default function InputBoxWithButton (props) {

    const inputBoxStyle = {
        justifyContent: 'center',
        display: 'flex', 
        padding: '10px',
        
        
    }

        return(
            <div>
                <div className="input-with-button" style={inputBoxStyle}>
                    <input 
                    type="text"
                    value={props.inputTask}
                    onChange={(e) => props.setInputTask(e.target.value)}
                    placeholder="Add Task"
                    id="todo-input-field"
                    />
                    <button onClick={props.handleButtonClick} className="btn btn-outline-info">Add</button>
                    
                </div>
                <p style={inputBoxStyle}>{props.inputTask}</p>
            </div>
        );
}
