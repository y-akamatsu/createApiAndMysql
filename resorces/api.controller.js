'use strict'

const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400
};

module.exports = {
  getTodos(req, res) {
    send(res, STATUS_CODES.OK, '`getTotos` should return todo list from DB', false);
  },
  postTodo(req, res) {
    send(res, STATUS_CODES.OK, '`postTodo` should create a new todo to DB', false);
  },
  putTodo(req, res) {
    send(res, STATUS_CODES.OK, '`putTodo` should update a todo in DB', false);
  },
  deleteTodo(req, res) {
    send(res, STATUS_CODES.OK, '`deleteTodo` should delete a todo from DB', false);
  }
}

const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
}; 