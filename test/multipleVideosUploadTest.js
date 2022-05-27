const { request } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();

chai.use(chaiHttp);

describe("Tech Buddy API", () => {
    describe('POST /api/multipleVideosUpload', async() =>{
        const userEmail = "Andrew@abcd.com";
        const token = await userToken(userEmail);

        it('it should POST multiple videos', (done) => {
            chai.request(server)
                .post('/api/multipleVideosUpload')
                .set('auth-token', token)
                .field('Content-Type', 'multipart/form-data')
                .attach('videos', 'C:/Users/Andrew/Downloads/Video/videoplayback_3.mp4')
                .attach('videos', 'C:/Users/Andrew/Downloads/Video/videoplayback_4.mp4')
                .end((err, response) =>{
                    response.should.have.status(200);                    
                    response.body.should.have.property('message').eq("Videos Uploaded Successfully");
                    done();
                });
        });
        
        it('it should not POST any videos due to server error', (done) => {
            chai.request(server)
                .post('/api/multipleVideosUpload')
                .set('auth-token', token)
                .end((err, response) =>{
                    response.should.have.status(500);
                    done();
                });
        });

        it('it should not POST any videos due to unauthorized access', (done) => {
            chai.request(server)
                .post('/api/multipleVideosUpload')
                .end((err, response) =>{
                    response.should.have.status(401);
                    response.text.should.be.eq("Access Denied");
                    done();
                });
        });
    });
});