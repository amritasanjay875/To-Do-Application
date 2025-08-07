import React, {useState} from "react";

const AddToDo = () => {
    const [task, setTask] = useState('');

    const saveTask = (event) => {
        setTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Currently added task: ${task}`);
        setTask('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={saveTask} placeholder="Add a new to-do task"/>
                <button type="submit">ADD</button>
            </form>
            <p>{task}</p>
        </>
    )
}

export default AddToDo;