import "./Task.css"
const Task = ({task, onChangeStatus, onEdit, onDelete}) => {
    return ( 
        <div className="task-container">
            <div className="task-info">
                <input className="task-check" type="checkbox" onChange={(e) => onChangeStatus(e, task.id)}/>
                <span className="task-name">{task.name}</span>
            </div>
            <div className="task-action">
                <button className="task-edit" onClick={() => onEdit(task.id)}>✏️</button>
                <button className="task-delete" onClick={() => onDelete(task.id)}>❌</button>
            </div>
        </div>
     );
}
 
export default Task;