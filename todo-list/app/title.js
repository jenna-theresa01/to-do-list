export default function Title () {

    const titleStyle = {
        justifyContent: 'center',
        display: 'flex', 
        flexDirection: 'row',
        padding: '10px',
    }

    return(
        <div style={titleStyle}>
            <h1>To Do List</h1>
        </div>
    )
}