const {userToken} = require('../utils/token');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const path = require('path');

chai.should();

chai.use(chaiHttp);

describe("Tech Buddy API", () => {
    describe('POST /api/single/imageUpload', async() =>{
        const userEmail = "Andrew@abcd.com";
        const token = await userToken(userEmail);
        it('it should POST a single image', (done) => {
            chai.request(server)
                .post('/api/single/imageUpload')
                .set('auth-token', token)
                .field('Content-Type', 'multipart/form-data')
                .attach('image', path.join(__dirname, '../public/assets/cheetah.jpg'))
                .end((err, response) =>{
                    response.should.have.status(200);                    
                    response.body.should.have.property('message').eq("Image Uploaded Successfully");
                    done();
                });
        });

        it('it should not POST a single image due to server error', (done) => {
            chai.request(server)
                .post('/api/single/imageUpload')
                .set('auth-token', token)
                .end((err, response) =>{
                    response.should.have.status(500);
                    done();
                });
        });

        it('it should not POST a single image due to unauthorized access', (done) => {
            chai.request(server)
                .post('/api/single/imageUpload')
                .end((err, response) =>{
                    response.should.have.status(401);
                    response.text.should.be.eq("Access Denied");
                    done();
                });
        });
    });
});