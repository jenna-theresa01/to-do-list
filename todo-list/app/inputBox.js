import React, { useState } from "react";

export default function InputBoxWithButton ({}) {

    const inputBoxStyle = {
        justifyContent: 'center',
        display: 'flex', 
        padding: '10px',
        
        
    }

    const [inputTask, setInputTask] = useState('');
    const [showTask, setShowTask] = useState(false);

        return(
            <div>
                <div className="input-with-button" style={inputBoxStyle}>
                    <input 
                    type="text"
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                    placeholder="Add Task"
                    id="todo-input-field"
                    />
                    <button onClick={() => setShowTask(true)} className="btn btn-outline-info">Add</button>
                    
                </div>
                {showTask && <p style={inputBoxStyle}>{inputTask}</p>}
            </div>
        );
}
