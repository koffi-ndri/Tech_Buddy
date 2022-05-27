const {userToken} = require('../utils/token');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();

chai.use(chaiHttp);

describe("Tech Buddy API", () => {
    describe('POST /api/singleVideoUpload', async() =>{
        const userEmail = "Andrew@abcd.com";
        const token = await userToken(userEmail);

        it('it should POST a single video', (done) => {
            chai.request(server)
                .post('/api/singleVideoUpload')
                .set('auth-token', token)
                .field('Content-Type', 'multipart/form-data')
                .attach('video', 'C:/Users/Andrew/Downloads/Video/videoplayback_3.mp4')
                .end((err, response) =>{
                    response.should.have.status(200);                    
                    response.body.should.have.property('message').eq("Video Uploaded Successfully");
                    done();
                });
        });

        it('it should not POST a single video due to server error', (done) => {
            chai.request(server)
                .post('/api/singleVideoUpload')
                .set('auth-token', token)
                .end((err, response) =>{
                    response.should.have.status(500);
                    done();
                });
        });

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