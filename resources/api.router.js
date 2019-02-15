const express = require("express");
const router = express.Router();
const apiController = require("./api.controller");

router.route("/todos")
  .get(apiController.getTodos)
  .post(apiController.postTodo);
router.route("/todos/:id")
  .get(apiController.getTodoById)
  .put(apiController.putTodo)
  .delete(apiController.deleteTodo);

module.exports = router;