const assert = require("power-assert");
const requestHelper = require("../requestHelper");
const todoFactory = require("../factories/todo");
const truncate = require("../truncate");
const Todo = require('../../models/index').Todo;
let targetTodo;
let url;

describe("PUT /api/todo/:id", () => {
  before(async () => {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      promises.push(todoFactory());
    }
    await Promise.all(promises);

    targetTodo = await Todo.findOne();
    url = `/api/todos/${targetTodo.id}`;
  });
  
  it("更新したデータの確認", () => {
    return requestHelper
    .requestAPI("put", url, 200)
    .send(JSON.stringify({ title: "titleA", body: "bodyA", completed: true }))
    .then(response => {
      assert.equal(response.body.title, "titleA", "titleの値が正しくありません")
      assert.equal(response.body.body, "bodyA", "bodyの値が正しくありません")
      assert.equal(response.body.completed, true, "completedの値が正しくありません")
    })
  })
});

describe("GET /api/todos/:id", () => {
  after(async () => {
    await truncate();
  });

  it("更新したデータをDBから取得できるかの確認", () => {
    return requestHelper
      .requestAPI("get", url, 200)
      .then(response => {
        assert.deepEqual(response.body, {
          id: targetTodo.id,
          title: "titleA",
          body: "bodyA",
          completed: true,
          createdAt: response.body.createdAt,
          updatedAt: response.body.updatedAt
        });
      });
  });
});