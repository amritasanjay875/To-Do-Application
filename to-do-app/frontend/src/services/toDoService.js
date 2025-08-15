// Service functions for fetch requests in App.js component.

// The baseUrl remains constant for all fetch operations. Hence assigning to a const variable.
const baseUrl = 'http://localhost:5000/api/todos';

// Function to fetch list of to-do tasks from backend API.
const getTasks = async() => {
    try {
        const getResponse = await fetch(baseUrl);
        // If response is not okay, throws error.
        if(!getResponse.ok) {
            throw new Error('Failed to retreive to-do items'); 
        } else {
            // Returning array of task objects from data field in JSON response to App Component.
            const jsonResponse = await getResponse.json();
            console.log(jsonResponse);
            const todoTasks = jsonResponse.data;
            return todoTasks;
        }
    } catch(error) {
        console.log("Error retreiving items from to-do list", error);
        throw error;
    }
}

// Function to write new to-do task to the backend API.
const addTask = async(newTask) => {
    try {
        const postResponse = await fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTask)
        });
        if(!postResponse.ok) {
            throw new Error('Failed to add to-do items');
        } else {
            // The backend json response contains only the newly added task in the data field.
            // In this React app, we need the full updated task list to re-render the UI.
            // Since the backend already updates the task array, we avoid duplicating the same logic 
            // here by re-fetching the entire list using getTasks().
            // This ensures that App.js component receives the latest task list to display.
            const addedTasks = await getTasks();
            return addedTasks;
        }
    } catch (error) {
        console.log("Error creating new task", error);
        throw error;
    }
}

// Function to update to-do task as Completed.
const updateTask = async(id) => {
    try {
        // The id of the task to be updated passed along with the PUT request.
        const putResponse = await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: 'PUT',
        });
        if (!putResponse.ok) {
            throw new Error('Failed to mark task as Done');
        } else {
            // The backend json response contains only the updated task in the data field.
            // In this React app, we need the full updated task list to re-render the UI.
            // Since the backend already updates the task array, we avoid duplicating the same logic 
            // here by re-fetching the entire list using getTasks().
            // This ensures that App.js component receives the latest task list to display.
            const updatedTasks = await getTasks();
            return updatedTasks;
        }
    } catch(error) {
        console.log('Error marking task as Done', error);
        throw error;
    }
}

// Function to delete to-do task.
const deleteTask = async(id) => {
    try {
        // The id of the task to be deleted passed along with the DELETE request.
        const deleteResponse = await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: 'DELETE',
        });
        if (!deleteResponse.ok) {
            throw new Error('Failed to delete task');
        } else {
            // The backend json response contains only the deleted task in the data field.
            // In this React app, we need the full updated task list to re-render the UI.
            // Since the backend already updates the task array, we avoid duplicating the same logic 
            // here by re-fetching the entire list using getTasks().
            // This ensures that App.js component receives the latest task list to display.
            const tasksAfterDeletion = await getTasks();
            return tasksAfterDeletion;
        }
    } catch(error) {
        console.log('Error deleting task', error);
        throw error;

    }
}

// Exporting the service functions to use inside App.js
export {getTasks, addTask, updateTask, deleteTask};