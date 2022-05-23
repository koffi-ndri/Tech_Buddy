const { request } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();

chai.use(chaiHttp);

describe("Tech Buddy API", () => {
    describe('POST /api/singleVideoUpload', () =>{

        it('it should not POST a single video due to unauthorized access', (done) => {
            chai.request(server)
                .post('/api/singleVideoUpload')
                .end((err, response) =>{
                    response.should.have.status(401);
                    response.text.should.be.eq("Access Denied");
                    done();
                });
        });
    });
});