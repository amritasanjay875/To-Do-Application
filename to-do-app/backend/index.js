const express = require('express');
// Importing cors to implement CORS middleware
const cors = require('cors');
const toDoRoute = require('./routes/toDo');

const app = express();

// app.get("/", (req,res) => {
//     res.send("Setup works correctly");
// })

// Middleware Functions
app.use(cors()); // For allowing browser to communicate with server
app.use(express.json()); // For parsing JSON requests

// Route for toDo
app.use('/api/todos', toDoRoute);

app.listen(5000, () => {
    console.log("Server listening on Port 5000");
})