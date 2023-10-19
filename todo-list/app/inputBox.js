export default function InputBoxWithButton ({handleButtonClick}) {

    const inputBoxStyle = {
        justifyContent: 'center',
        display: 'flex', 
        padding: '10px',
        
        
    }

    return(
        <div className="input-with-button" style={inputBoxStyle}>
            <input
            type="text"
            placeholder="Add Task"
            id="todo-input-field"
            />
            <button onClick={handleButtonClick} className="btn btn-outline-info">Add</button>
        </div>
    )
}