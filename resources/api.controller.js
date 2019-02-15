'use strict'

const index = require('../models/index');

const throwError = (errorMessage, errorCode) => {
  const error = new Error();
  error.message = errorMessage;
  error.code = errorCode;
  throw error;
};

module.exports = {
  async getTodos(req, res) {
    try {
      const todos = await index.Todo.findAll({
        order: [["id", "ASC"]]
      }).catch(error => {
        throwError("server Error", 500);
      });

      if (!todos) {
        throwError("Not Found", 404);
      }

      res.status(200).json(todos);
    } catch (error) {
      res.status(error.code).json(error);
    }
  },

  async postTodo(req, res) {
    const transaction = await index.sequelize.transaction();
    try {
      const todo = await index.Todo.create(
        {
          title: req.body.title,
          body: req.body.body,
          completed: req.body.completed
        },
        { transaction }
      ).catch(error => {
        throwError("serever Error", 500);
      });

      await transaction.commit();
      res.status(200).json(todo);
    } catch (error) {
      await transaction.rollback();
      res.json(error);
    }
  },

  async getTodoById(req, res) {
    const targetTodoId = req.params.id;
    try {
      const todo = await index.Todo.findById(Number(targetTodoId)).catch(
        error => {
          throwError("Server Error", 500);
        }
      );

      if (!todo) {
        throwError("Not Found", 404);
      }

      res.status(200).json(todo);
    } catch (error) {
      res.status(error.code).json(error);
    }
  },


  async putTodo(req, res) {
    const targetTodoId = req.params.id;
    let transaction;
    try {
      transaction = await index.sequelize.transaction();

      const todo = await index.Todo.findById(Number(targetTodoId), {
        transaction
      }).catch(error => {
        throwError("server Found", 500);
      });

      if (!todo) {
        throwError("Not Found", 404);
      }

      await todo.update({
        title: req.body.title,
        body: req.body.body,
        completed: req.body.completed
      },
        { transaction }
      ).catch(error => {
        throwError("server Error", 500);
      });

      await transaction.commit();
      res.status(200).json(todo);
    } catch (error) {
      await transaction.rollback();
      res.json(error);
    }
  },

  async deleteTodo(req, res) {
    const targetTodoId = req.params.id;
    const transaction = await index.sequelize.transaction();
    try {
      const todo = await index.Todo.findById(Number(targetTodoId), {
        transaction
      }).catch(error => {
        throwError("Server Error", 500);
      });

      if (!todo) {
        throwError("Not Found", 404);
      }

      await todo.destroy({ transaction }).catch(error => {
        throwError("Server Error", 500);
      });

      await transaction.commit();
      res.status(200).json(todo);
    } catch (error) {
      await transaction.rollback();
      res.status(error.code).json(error);
    }
  }
};