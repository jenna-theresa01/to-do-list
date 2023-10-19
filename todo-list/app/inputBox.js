export default function InputBoxWithButton ({handleButtonClick}) {

    const inputBoxStyle = {
        justifyContent: 'center',
        display: 'flex', 
        padding: '10px',
        
        
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            handleButtonClick();
        }
    }


    return(
        <div className="input-with-button" style={inputBoxStyle}>
            <input
            type="text"
            placeholder="Add Task"
            id="todo-input-field"
            />
            <button onClick={handleButtonClick} onKeyDown={handleKeyPress} className="btn btn-outline-info">Add</button>
        </div>
    )
}

