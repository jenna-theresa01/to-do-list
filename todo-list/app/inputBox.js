export default function InputBox () {

    const inputBoxStyle = {
        justifyContent: 'center',
        display: 'flex', 
        padding: '10px',
    }

    return(
        <div style={inputBoxStyle}>
            <input
            type="text"
            id="todo-input-field"
            />
        </div>
    )
}