const requestHelper = require('./requestHelper');

//正常系テストの実装
describe('POST /api/todos', () => {
  it('POSTメソッドの確認', () => {
    return requestHelper.requestAPI('post', '/api/todos', 200);
  });
});

describe('PUT /api/todos/1', () => {
  it('PUTメソッドの確認', () => {
    return requestHelper.requestAPI('put', '/api/todos/1', 200);
  });
});

describe('DELET /api/todos/1', () => {
  it('DELETEメソッドの確認', () => {
    return requestHelper.requestAPI('delete', '/api/todos/1', 200);
  });
});

//異常系テストの実装

describe('POST /api/aaaa', () => {
  it('ステータスコード404になる', () => {
    return requestHelper.requestAPI('post', '/api/aaaa', 404);
  });
});

describe('PUT /api/aaaa/1', () => {
  it('ステータスコード404になる', () => {
    return requestHelper.requestAPI('put', '/api/aaaa/1', 404);
  });
});

describe('DELETE /api/todos/1', () => {
  it('ステータスコード404になる', () => {
    return requestHelper.requestAPI('delete', '/api/aaaa/1', 404);
  });
});

