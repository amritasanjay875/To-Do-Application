const express = require('express');
const {getToDoItems, createToDoItems, updateToDoItems, deleteToDoItems} = require('../controller/toDoController');

const router = express.Router();

router.get('/', getToDoItems);

router.post('/', createToDoItems);

router.put('/:id', updateToDoItems);

router.delete('/:id', deleteToDoItems);

module.exports = router;