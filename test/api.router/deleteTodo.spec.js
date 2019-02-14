const assert = require("power-assert");
const requestHelper = require("../requestHelper");
const todoFactory = require("../factories/todo");
const truncate = require("../truncate");
const Todo = require("../../models/index").Todo;

let targetTodo;
let url;
describe("DELETE /api/todos/:id", () => {
  before(async () => {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      promises.push(todoFactory());
    }
    await Promise.all(promises);

    targetTodo = await Todo.findOne();
    url = `/api/todos/${targetTodo.id}`;
  });

  it("DB内のデータを削除する", () => {
    return requestHelper
    .requestAPI("delete", url, 200);
  });
});

describe("GET /api/todos/:id", () => {
  after(async () => {
    await truncate();
  });

  it("削除したはずのデータがDBに存在しないかの確認", () => {
    return requestHelper
      .requestAPI("get", url, 200)
      .then(response => {
        assert.deepEqual(response.body, {
          message: "Not Found",
          code: "404"
        });
      });
  });
});