module.exports = {
  getTodos(req, res) {
    res.status(200).send("get todos from DB");
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