export default function InputBoxWithButton ({handleButtonClick}) {

    const inputBoxStyle = {
        justifyContent: 'center',
        display: 'flex', 
        padding: '10px',
        
        
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleButtonClick(e);
            
        }
    }

    return(
        <div className="input-with-button" style={inputBoxStyle}>
            <input onKeyDown={handleKeyPress}
            type="text"
            placeholder="Add Task"
            id="todo-input-field"
            />
            <button onClick={handleButtonClick} className="btn btn-outline-info">Add</button>
        </div>
        
    )
}

