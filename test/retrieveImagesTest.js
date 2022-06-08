const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const {userToken} = require('../utils/token');

chai.should();

chai.use(chaiHttp);


describe("Tech Buddy API", () => {
    describe('GET /api/retrieve/images', async() =>{
        const userEmail = "Andrew@abcd.com";
        const token = await userToken(userEmail);
        it('it should GET a list of images urls', (done) =>{
            chai.request(server)
                .get('/api/retrieve/images')
                .set('auth-token', token)
                .end((err, response) =>{
                    if(err) return done(err);
                    response.should.have.status(200);
                    //response.body.should.be.a("array");
                    done();
                });
        });

        it('it should not retrieve any images due to unauthorized access', (done) => {
            chai.request(server)
                .get('/api/retrieve/images')
                .end((err, response) =>{
                    response.should.have.status(401);
                    response.text.should.be.eq("Access Denied");
                    done();
                });
        });
    });
});