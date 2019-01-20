const express = require("express");
const router = express.Router();
const apiController = require("./api.controller");

router.route("/todos")
  .get(apiController.getTodos)
  .post(apiController.postTodos);
router.route("/todos/:id")
  .put(apiController.putTodos)
  .delete(apiController.deleteTodos);

module.exports = router;