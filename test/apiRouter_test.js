
const requestHelper = require('./requestHelper');

//正常系テストの実装
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

