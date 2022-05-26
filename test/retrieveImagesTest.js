const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const {userToken} = require('../utils/token');
//const User = require('../model/User');
chai.should();

chai.use(chaiHttp);

//let user;
//let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjg5NDM0YjY0MmMwMDcwNWM4NmRkM2EiLCJpYXQiOjE2NTMxNjY5NjN9.sr0PZfGQBIotZ7gb8v9EOhHevJIEd3RlvGtseq_kVyA';
    // user = User.find({}, (err, userlist) =>{
    //     if(err){
    //         return;
    //     }else{
    //         return userlist[0];
    //     };
    // });

    //token = userToken(user.email);

describe("Tech Buddy API", () => {
    describe('GET /api/retrieveImages', async() =>{
        const userEmail = "Andrew@abcd.com";
        const token = await userToken(userEmail);
        it('it should GET a list of images urls', (done) =>{
            chai.request(server)
                .get('/api/retrieveImages')
                .set('auth-token', token)
                .end((err, response) =>{
                    if(err) return done(err);
                    response.should.have.status(200);
                    response.body.should.be.a("array");
                    done();
                });
        });

        it('it should not retrieve any images due to unauthorized access', (done) => {
            chai.request(server)
                .get('/api/retrieveImages')
                .end((err, response) =>{
                    response.should.have.status(401);
                    response.text.should.be.eq("Access Denied");
                    done();
                });
        });
    });
});