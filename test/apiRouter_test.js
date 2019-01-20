const request = require('supertest');
const app = require('../server');

function testGet(url, statusCode) {
  return request(app)
    .get(url)
    .expect(statusCode);
}

function testPost(url, statusCode) {
  return request(app)
    .post(url)
    .expect(statusCode);
}

function testPut(url, statusCode) {
  return request(app)
    .put(url)
    .expect(statusCode);
}

function testDelete(url, statusCode) {
  return request(app)
    .delete(url)
    .expect(statusCode);
}

//正常系テストの実装
describe('GET /api', () => {
  it('GETメソッドの確認', () => {
    return testGet('/api/todos', 200);
  });
});

describe('POST /api', () => {
  it('POSTメソッドの確認', () => {
    return testPost('/api/todos', 200);
  });
});

describe('PUT /api', () => {
  it('PUTメソッドの確認', () => {
    return testPut('/api/todos/1', 200);
  });
});

describe('DELET /api', () => {
  it('DELETEメソッドの確認', () => {
    return testPut('/todos/api/1', 200);
  });
});

//異常系テストの実装
describe('GET /api', () => {
  it('ステータスコード404になる', () => {
    return testGet('/todos/api', 404);
  });
});

describe('POST /api', () => {
  it('ステータスコード404になる', () => {
    return testPost('/todos/api', 404);
  });
});

describe('PUT /api', () => {
  it('ステータスコード404になる', () => {
    return testPut('/todos/api/1', 404);
  });
});

describe('DELETE /api', () => {
  it('ステータスコード404になる', () => {
    return testDelete('/todos/api/1', 404);
  });
});