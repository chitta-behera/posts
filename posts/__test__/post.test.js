const request = require('supertest');

const express = require('express');

const app = express();

it('responds with json', function(done) {
    request(app)
      .get('/posts')
      .set('Accept', 'application/json');
      //.expect('Content-Type', /json/)
      //.expect(200, done);
  });
