import React, {useState} from "react";
import './styles/AddToDo.css';

const AddToDo = (props) => {
    // State variable to store the user's input for a new task.
    const [task, setTask] = useState('');

    // Function to update the task state as the user types in the input field.
    const saveTask = (event) => {
        setTask(event.target.value);
    }

    // Function to handle the form submission to add a new task.
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Currently added task: ${task}`);

        // Sends the new task object to the parent component via props.
        // The task is initialized with isComplete set to false.
        props.onAddToDo({
            newTask: task,
            isComplete: false
        });

        // Using the state variable, the input field cleared after user submission.
        setTask('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={saveTask} placeholder="Add a new to-do task"/>
                <button type="submit">ADD</button>
            </form>
        </>
    )
}

export default AddToDo;