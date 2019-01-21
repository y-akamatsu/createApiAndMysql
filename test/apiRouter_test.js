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
describe('GET /api/todos', () => {
  it('GETメソッドの確認', () => {
    return testGet('/api/todos', 200);
  });
});

describe('POST /api/todos', () => {
  it('POSTメソッドの確認', () => {
    return testPost('/api/todos', 200);
  });
});

describe('PUT /api/todos/1', () => {
  it('PUTメソッドの確認', () => {
    return testPut('/api/todos/1', 200);
  });
});

describe('DELET /api/todos/1', () => {
  it('DELETEメソッドの確認', () => {
    return testDelete('/api/todos/1', 200);
  });
});

//異常系テストの実装
describe('GET /api/aaaa', () => {
  it('ステータスコード404になる', () => {
    return testGet('/api/aaaa', 404);
  });
});

describe('POST /api/aaaa', () => {
  it('ステータスコード404になる', () => {
    return testPost('/api/aaaa', 404);
  });
});

describe('PUT /api/aaaa/1', () => {
  it('ステータスコード404になる', () => {
    return testPut('/api/aaaa/1', 404);
  });
});

describe('DELETE /api/todos/1', () => {
  it('ステータスコード404になる', () => {
    return testDelete('/api/aaaa/1', 404);
  });
});