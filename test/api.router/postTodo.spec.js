const assert = require("power-assert");
const requestHelper = require("../requestHelper");
let id;

//正常系のテスト
describe("POST /api/todos", () => {
  it("テストコードで作成した値の確認", () => {
    return requestHelper
      .requestAPI("post", "/api/todos", 200)
      .set("Content-Type", "application/json")
      .send(JSON.stringify({ title: "titleA", body: "bodyA", completed: false }))
      .then(response => {
        //データの型のテスト
        //assert.equal(実際値, 期待値, エラー文);
        assert.equal(typeof response.body.id, "number", "idの型が正しくありません。");
        assert.equal(typeof response.body.title, "string", "titleの型が正しくありません。");
        assert.equal(typeof response.body.body, "string", "bodyの型が正しくありません。");
        assert.equal(response.body.completed, 0, "completedの型が正しくありません。");
        assert.equal(typeof response.body.createdAt, "string", "createdAtの型が正しくありません。");
        assert.equal(typeof response.body.updatedAt, "string", "updatedAtの型が正しくありません。");
        //データの値のテスト
        id = response.body.id;
        assert.equal(response.body.id, id, "idの値が正しくありません。");
        assert.equal(response.body.title, "titleA", "titleの値が正しくありません。");
        assert.equal(response.body.body, "bodyA", "bodyの値が正しくありません。");
        assert.equal(response.body.completed, false, "completedの値が正しくありません。");
      });
  });
});

describe("GET /api/todos/1", () => {
  it("作成したデータをDBから取得できるかの確認", () => {
    return requestHelper
      .requestAPI("get", "/api/todos/" + id, 200)
      .set("Accept", "application/json")
      .then(response => {
        // DBの各カラムの値チェック
        assert.equal(response.body.title, "titleA", "titleの値が正しくありません。");
        assert.equal(response.body.body, "bodyA", "bodyの値が正しくありません。");
        assert.equal(response.body.completed, false, "completedの値が正しくありません。");
      });
  });
});