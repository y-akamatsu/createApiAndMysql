const express = require("express");
const router = express.Router();
const apiController = require("./api.controller");

router.route("/todos")
  .get(apiController.postTodos)
  .post(apiController.postTodos)
router.route("/todos/:id")
  .get(apiController.getTodoById)
  .put(apiController.putTodos)
  .delete(apiController.deleteTodos);

module.exports = router;