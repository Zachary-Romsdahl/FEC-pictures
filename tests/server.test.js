/* eslint-disable no-console */
/* eslint-disable no-undef */
const supertest = require('supertest');
const { app } = require('../server/index.js');

const request = supertest(app);

describe('GET /pictures/itemId/:itemId', () => {
  it('should return an object containing pictures related to itemId', () => {
    request.get('/pictures/itemId/1')
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.item_id).toEqual('1');
      });
  });
  it('should return an error when itemId does not exist', () => {
    request.get('/pictures/itemId/500')
      .then((response) => {
        expect(response.status).toBe(400);
      });
  });
});
