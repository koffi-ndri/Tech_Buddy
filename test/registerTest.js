const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
// const User = require('../model/User');
chai.should();

chai.use(chaiHttp);

describe("Tech Buddy API", () => {
    describe('POST /api/register', () =>{

        it('it should be able to register a user successfully', (done) =>{
            chai.request(server)
                .post('/api/register')
                .send({
                    username: "Max",
                    email: "max@abcd.com",
                    password: "Andrew2"
                })
                .end((err, response) =>{
                    if(err){ 
                        console.log(err);
                    };
                    response.should.be.a('object');
                    return done();
                });
        });

        // it('it should not GET any images due to unauthorized access', (done) => {
        //     chai.request(server)
        //         .get('/api/retrieveImages')
        //         .end((err, response) =>{
        //             response.should.have.status(401);
        //             response.text.should.be.eq("Access Denied");
        //             done();
        //         });
        // });
    });
});