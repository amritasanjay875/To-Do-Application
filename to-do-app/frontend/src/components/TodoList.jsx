import ToDoItem from "./TodoItem";

const ToDoList = ({toDoTasks, onComplete, onDelete}) => {
    return (
        <>
            <h1>List of To-do Items</h1>

            {/* If toDoTasks is empty then ask user to populate list, 
            else render each task using ToDoItem component. */}
            {toDoTasks.length === 0 ? (
                <p>To-do list is empty. Add tasks to populate list.</p>
            ) : (
                toDoTasks.map((toDoTask) => (
                    <ToDoItem 
                        key={toDoTask.id} 
                        task={toDoTask}
                        // Passing task id to onComplete and onDelete handlers.
                        onComplete={() => onComplete(toDoTask.id)}
                        onDelete={() => onDelete(toDoTask.id)}
                    />
                ))
            )}
        </>
    )
}

export default ToDoList;