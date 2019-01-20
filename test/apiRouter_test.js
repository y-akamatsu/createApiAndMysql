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

describe('GET /api', () => {
  it('GETメソッドの確認', () => {
    return testGet('/todos/api', 200);
  });
});

describe('POST /api', () => {
  it('POSTメソッドの確認', () => {
    return testPost('/todos/api', 200);
  });
});

describe('PUT /api', () => {
  it('PUTメソッドの確認', () => {
    return testPut('/todos/api', 200);
  });
});

describe('DELETE /api', () => {
  it('DELETEメソッドの確認', () => {
    return testDelete('/todos/api', 200);
  });
});

describe('GET /aaa', () => {
  it('', () => {
    return RequestApiTest('/aaa', 404);
  });
});