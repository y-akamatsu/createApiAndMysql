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

  async postTodos(req, res) {
    let transaction;
    try {
      transaction = await index.sequelize.transaction();

      const todo = await index.Todo.create(
        {
          title: req.body.title,
          body: req.body.body,
          completed: req.body.completed
        },
        { transaction },
      );
      await transaction.commit();
      res.status(200).json(todo);
    } catch (error) {
      await transaction.rollback();
      res.json(error);
    }
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

  async putTodos(req, res) {
    const targetTodoId = req.params.id;
    let transaction;
    try {
      transaction = await index.sequelize.transaction();

      const todo = await index.Todo.findById(Number(targetTodoId), {
        transaction
      });

      if (!todo) {
        const error = new Error();
        error.message = "Not Found";
        error.code = 404;
        throw error;
      }

      await todo.update({
        title: req.body.title,
        body: req.body.body,
        completed: req.body.completed
      });

      await transaction.commit();
      res.status(200).json(todo);
    } catch (error) {
      await transaction.rollback();
      res.json(error);
    }
  },
  deleteTodos(req, res) {
    const id = req.params.id;
    const data = "delete todo of id " + id + " from DB";
    res.status(200).send(data);
  }
};