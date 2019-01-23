const assert = require('power-assert');
const testGet = require('../apiRouter_test');

describe('GET /api/todos', () => {
  it('APIで取得した値の型の確認', () => {
    return testGet('/api/todos', 200)
      .set('Accept', 'application/json')
      .then(response => {
        const todos = response.body;
        assert.equal(Array.isArray(todos), true, '配列ではありません');
        todos.forEach((todo, index) => {
          assert.equal(todo.id, index + 1, 'idが正しくありません');
          assert.equal(typeof todo.title, 'string', 'titleの型が間違っています。');
          assert.equal(typeof todo.body, 'string', 'bodyの型が間違っています。');
          assert.equal(typeof todo.completed, 'boolean', 'completedの値が間違っています。');
          assert.equal(todo.completed, false, 'completedの値はtrueではありません。');
          assert.equal(typeof todo.createdAt, 'string', 'createdAtの型が間違っています。');
          assert.equal(typeof todo.updatedAt, 'string', 'updatedAtの型が間違っています。');
        });
      });
  });
});