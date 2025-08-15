import './App.css';
import AddToDo from './components/AddToDo';
import { useEffect, useState } from 'react';
import ToDoList from './components/TodoList';

// Service functions for handling of fetching tasks from backend API.
import {getTasks, addTask, updateTask, deleteTask} from './services/toDoService';

function App() {
  
  // State variable to manage the state of tasks array.
  const [newTasks, setNewTasks] = useState([]); 
  
  // Function to handle fetch tasks from the backend when component first mounts.
  const handleFetchTasks = async() => {
    try {
      // getTasks() service function called which returns updated list of to-do items.
      const tasks = await getTasks();
      if(tasks) {
        // Updating newTasks state with the returned tasks from the backend.
        setNewTasks(tasks);
      }
    } catch(error) {
      console.log(error);
      // Alert to the user if the fetch fails.
      alert("Failed to fetch to-do tasks. Try again later.")
    } 
  }

  // useEffect hook to fetch the tasks using handleFetchTasks() function on initial render.
  useEffect(() => {
    handleFetchTasks();
  }, []);

  // Function to handle add new tasks, which is passed as a prop to AddToDo component.
  const handleAddTask = async(newTask) => {
    try {
      // addTask() service function called which sends the newTask to the backend and returns updated 
      // list of task items.
      const addedTasks = await addTask(newTask);
      if(addedTasks) {
        // Updating newTasks state with the returned tasks from the backend.
        setNewTasks(addedTasks);
      }
    } catch(error) {
      console.log(error);
      // Alert to the user if the addition of task fails.
      alert("Failed to add to-do task. Check input and try again.")
    }
  }

  // Function to handle updating tasks as Done, which is passed as a prop to ToDoList component.
  const handleCompleteTask = async(id) => {
    try {
      // updateTask() service function called which sends the id of task to be updated to the 
      // backend and returns updated list of task items.
      const updatedTasks = await updateTask(id);
      if(updatedTasks) {
        // Updating newTasks state with the returned tasks from the backend.
        setNewTasks(updatedTasks);
      }
    } catch(error) {
      console.log(error);
      // Alert to the user if the updation of task fails.
      alert("Failed to mark task as Done. Try again.")
    }
  }

  // Function to handle deleting tasks from list, which is passed as a prop to ToDoList component.
  const handleDeleteTask = async(id) => {
    try {
      // deleteTask() service function called which sends the id of task to be deleted to the 
      // backend and returns updated list of task items.
      const tasksAfterDelete = await deleteTask(id);
      if (tasksAfterDelete) {
        // Updating newTasks state with the returned tasks from the backend.
        setNewTasks(tasksAfterDelete);
      }
    } catch(error) {
      console.log(error);
      // Alert to the user if the deletion of task fails.
      alert("Failed to delete task. Try again.")
    }
  }

  return (
    <div className='container'>
      <h1>To-Do Application</h1>

      {/* Prop passed to the AddToDo component is the handleAddTask function */}
      <AddToDo onAddToDo={handleAddTask}/>
      
      {/* Props passed to the ToDoList component are list Of tasks(from the state variable newTasks), 
      handleCompleteTask function and handleDeleteTask function. */}
      <ToDoList 
        toDoTasks={newTasks}
        onComplete = {handleCompleteTask}
        onDelete = {handleDeleteTask} 
      />
    </div>
  );
}

export default App;
