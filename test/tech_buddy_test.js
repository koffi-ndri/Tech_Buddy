const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');

chai.should();

chai.use(chaiHttp);

describe("Tech Buddy API", () => {
    describe('GET /api/');
});