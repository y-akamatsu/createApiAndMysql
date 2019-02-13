
const requestHelper = require('./requestHelper');

describe('DELET /api/todos/1', () => {
  it('DELETEメソッドの確認', () => {
    return requestHelper.requestAPI('delete', '/api/todos/1', 200);
  });
});

//異常系テストの実装

describe('DELETE /api/todos/1', () => {
  it('ステータスコード404になる', () => {
    return requestHelper.requestAPI('delete', '/api/aaaa/1', 404);
  });
});

