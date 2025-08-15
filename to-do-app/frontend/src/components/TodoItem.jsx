import './styles/ToDoItem.css';

const ToDoItem = ({task, onComplete, onDelete}) => {
    return (
        <div className='todo-item'>
            <div className='todo-text'>
                <p>Task {task.id}: {task.newTask}</p>

                {/* Ternary condition to display Status as Completed if task.isComplete is true,
                else display Status as To Do. */}
                <p>Status: {task.isComplete? 'Completed' : 'To Do'}</p>

            </div>
            <div className='todo-buttons'>

                {/* Button is disabled if task is completed, else enabled. */}
                <button 
                onClick={onComplete} 
                disabled={task.isComplete}>
                        {/* Ternary condition to display Done if task.isComplete is true, else 
                        display Mark As Done. */}
                        {task.isComplete? 'Done' : 'Mark As Done'}
                </button>
                
                <button onClick={onDelete}>Delete</button>
            </div> 
        </div>
    )
}

export default ToDoItem;