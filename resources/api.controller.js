'use strict'

const Todo = require('../models/index').Todo;

module.exports = {
  async getTodos(req, res) {
    try {
      const todos = await Todo.findAll({
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