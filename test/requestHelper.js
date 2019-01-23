const request = require('supertest');
const app = require('../server');

module.exports = {
  requestAPI: (method, url, statusCode) => {
    const lowerMethod = method.toLowerCase();
    return request(app)
    [lowerMethod](url)
    .expect(statusCode);
  }
};