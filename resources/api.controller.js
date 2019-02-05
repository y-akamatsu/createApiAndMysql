'use strict'

const index = require('../models/index');

module.exports = {
  async getTodos(req, res) {
    try {
      const todos = await index.Todo.findAll({
        order: [["id", "ASC"]]
      });
      res.status(200).json(todos);
    } catch (error) {
      res.json(error);
    }
  },
  postTodos(req, res) {
    res.status(200).send("create todo to DB");
  },

  async getTodoById(req, res) {
    const selectId = req.params.id;
    try {
      const todo = await index.Todo.findById(Number(selectId));
      res.status(200).json(todo);
    } catch (error) {
      res.json(error);
    }
  },

  putTodos(req, res) {
    const id = req.params.id;
    const data = "update todo of id " + id + " in DB";
    res.status(200).send(data);
  },
  deleteTodos(req, res) {
    const id = req.params.id;
    const data = "delete todo of id " + id + " from DB";
    res.status(200).send(data);
  }
};