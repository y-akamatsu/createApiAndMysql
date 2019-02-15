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

  after(async () => {
    await truncate();
  });

  it("DB内のデータを1つ削除する", () => {
    return requestHelper
      .requestAPI("delete", url, 200)
      .then(response => {
        //deleteしたデータの確認
        assert.equal(typeof response.body.id, "number", "idの型が正しくありません。");
        assert.equal(typeof response.body.title, "string", "titleの型が正しくありません。");
        assert.equal(typeof response.body.body, "string", "bodyの型が正しくありません。");
        assert.equal(typeof response.body.completed, "boolean", "completedの型が正しくありません。");
        assert.equal(typeof response.body.createdAt, "string", "createdAtの型が正しくありません。");
        assert.equal(typeof response.body.updatedAt, "string", "updatedAtの型が正しくありません。");
      });
  });

  it("削除したはずのデータがDBに存在しないかの確認", () => {
    return requestHelper
      .requestAPI("get", url, 404)
      .then(response => {
        assert.deepEqual(response.body, {
          message: "Not Found",
          code: "404"
        });
      });
  });
});