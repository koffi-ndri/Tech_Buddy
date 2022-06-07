const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
// const User = require('../model/User');
chai.should();

chai.use(chaiHttp);

describe("Tech Buddy API", () => {
    describe('POST /api/auth/login', () =>{

        it('it should be able to login a user successfully', (done) =>{
            chai.request(server)
                .post('/api/auth/login')
                .send({
                    "email": "Andrew@abcd.com",
                    "password": "Andrew1"
                })
                .end((err, response) =>{
                    if(err){ 
                        console.log(err);
                    };
                    response.should.have.status(200);
                    return done();
                });
        });
    });
});