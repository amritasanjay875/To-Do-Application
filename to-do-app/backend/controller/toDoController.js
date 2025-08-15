// toDoList: Array to hold the list of toDo objects.
let toDoList = [];

// lastId: Variable for assigning id to each tasks. 
// The variable is initialized to 0 and on creation of each task, increments by 1 and 
// assigned as the id, thus preventing duplicate Ids.
let lastId = 0;

// Function to fetch and return toDoItems from the array. The array will be returned 
// inside the data field of the JSON response.
function getToDoItems(req, res) {
    res.status(200).json({
        data: toDoList
}); 
}


// Function to add new task to the array. The new task will be returned 
// inside the data field of the JSON response.
function createToDoItems(req, res) {
    const {newTask} = req.body;
    if (!newTask) {
        return res.status(400).json({
            error: 'Invalid input for task'
        })
    }
    lastId += 1; // updating Id.
    // Creating new to-do list object with id, newTask and isComplete initialised to False.
    const newToDoListTask = {
        id: lastId,
        newTask,
        isComplete: false
    }
    toDoList.push(newToDoListTask);
    res.status(201).json({
        message: "New task created",
        data: newToDoListTask
    })
}

// Function to update task in the array and mark as Done. The new updated task will be returned 
// inside the data field of the JSON response.
function updateToDoItems(req, res) {
    const id = parseInt(req.params.id);
    // Fetching the task from the array which matches the id from the request.
    const task = toDoList.find(listItem => {
        if (listItem.id == id) {
            return true;
        }
    })
    if(!task) {
        return res.status(404).json({
            error: 'Task Not Found'
        })
    } else {
        task.isComplete = true; // Assigning the task's isComplete field as true.
        res.status(200).json({
            message: 'Task completed',
            data: task
        })
    }
}

// Function to delete task in the array. The deleted task will be returned 
// inside the data field of the JSON response.
function deleteToDoItems(req, res) {
    const id = parseInt(req.params.id);
    // Fetching the index of the task from the array which matches the id from the request.
    const taskIndex = toDoList.findIndex(listItem => {
        if (listItem.id == id) {
            return true;
        }
    })
    if(taskIndex == -1) {
        return res.status(404).json({
            error: 'Task Not Found'
        })
    } else {
        // Splicing the array at the index of the task and removing 1 element.
        // Splicing returns an array and hence the deleted task will be at deletedTask[0].
        const deletedTask = toDoList.splice(taskIndex, 1);
        res.status(200).json({
            message: 'Task deleted',
            data: deletedTask[0]
        })
    }
}

module.exports = {getToDoItems, createToDoItems, updateToDoItems, deleteToDoItems};