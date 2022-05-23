const { request } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();

chai.use(chaiHttp);

describe("Tech Buddy API", () => {
    describe('GET /api/retrieveVideos', () =>{

        it('it should not GET any videos due to unauthorized access', (done) => {
            chai.request(server)
                .get('/api/retrieveVideos')
                .end((err, response) =>{
                    response.should.have.status(401);
                    response.text.should.be.eq("Access Denied");
                    done();
                });
        });
    });
});