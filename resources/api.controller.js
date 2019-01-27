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

  async postTodo(req, res) {
    let transaction;
    try {
      transaction = await models.sequelize.transaction();
      const todo = await models.Todo.create({
        title: req.body.title,
        body: req.body.body
      }, { transaction });

      await transaction.commit();
      send(res, STATUS_CODES.OK, formatResponseData({ todo }), false);
    } catch (error) {
      await transaction.rollback();
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