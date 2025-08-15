# REST API

A simple To-Do application built with React and Express.js, featuring functionalities for adding to-do items, viewing list of to-do items, marking to-do items as Done and deleting to-do items. The app is deployed at: .

## Functionalities

- Add To-Do Items
- View List of To-Do Items
- Mark To-Do Items as Done
- Delete To-Do Items

## Features

- Front End: React
- Backend: Node with Express.js

## API Endpoints

- `GET /api/todos` - Retrieve all to-do items. 
- `POST /api/todos` - Add a new to-do item.
- `PUT /api/todos/:id` - Update a to-do item by by id (by marking as DONE).
- `DELETE /api/todos/:id` - Delete a to-do item by ID
   
## Installation & Setup

### 1. Clone the Repository

To clone the repository from Github, use the following commands:
```bash
git clone https://github.com/amritasanjay875/To-Do-Application.git
cd to-do-app
```

### 2. Install Frontend Dependencies

To install node-modules required for running the frontend react application, use the following command:
```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

To install node-modules required for running the backend server, use the following command:
```bash
cd backend
npm install
```

### 4. Install additional dependencies for backend

The application uses the following packages:
  - Express.js - Web framework. 
  - cors - To enable browser communication with server.

Install these packages manually if needed using the following command:
```bash
npm install express cors
```

### 5. Launch the server

Start the server locally using the following command:
```bash
cd backend
nodemon index.js
```

The server will run at: http://localhost:5000.

### 6. Launch the application

Once the server is launched, start the REACT application in a separate terminal using the following command:
```bash
cd frontend
npm start
```

The application will be launched at: http://localhost:3000.

## Usage Instructions

Once the application is running:

- Navigate to `http://localhost:3000` in your browser.
- Use the form input field to add a new to-do task.
- Once the task is added to the list, it can be seen in the List of To-Do Items.
- Click the Mark As Done button in a task to mark it as done.
- Click the Delete button in a task to remove it from the list.

All actions will be reflected in real-time in the browser and stored via the backend API.

## Author

Amrita Sanjay
WIT Spring 2025 Cohort
