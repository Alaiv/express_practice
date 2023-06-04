import app from "../src/server.js";

const {describe, it, expect} = require("@jest/globals");

import request from 'supertest';
import {beforeAll} from "@jest/globals";


describe('sample test', () => {
    let application;

    beforeAll(() => {
        application = app();
    })

    it('GET /users', (done) => {
        request(application)
            .get('/api/users')
            .expect(200)
            .end(done)
    });
})