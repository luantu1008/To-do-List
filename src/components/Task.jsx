import "./Task.css"
const Task = () => {
    return ( 
        <div className="task-container">
            <div className="task-info">
                <input className="task-check" type="checkbox" />
                <span className="task-name">To Do Item</span>
            </div>
            <div className="task-action">
                <button className="task-edit">✏️</button>
                <button className="task-delete">❌</button>
            </div>
        </div>
     );
}
 
export default Task;