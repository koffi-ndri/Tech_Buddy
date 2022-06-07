const {userToken} = require('../utils/token');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();

chai.use(chaiHttp);

describe("Tech Buddy API", () => {
    describe('POST /api/multiple/imagesUpload', async() =>{
        const userEmail = "Andrew@abcd.com";
        const token = await userToken(userEmail);

        it('it should POST multiple images', (done) => {
            chai.request(server)
                .post('/api/multiple/imagesUpload')
                .set('auth-token', token)
                .field('Content-Type', 'multipart/form-data')
                .attach('images', 'C:/Users/Andrew/Pictures/cheetah.jpg')
                .attach('images', 'C:/Users/Andrew/Pictures/Cheetahs-1-800x400.jpg')
                .end((err, response) =>{
                    response.should.have.status(200);                    
                    response.body.should.have.property('message').eq("Images Uploaded Successfully");
                    done();
                });
        });

        it('it should not POST any images due to server error', (done) => {
            chai.request(server)
                .post('/api/multiple/imagesUpload')
                .set('auth-token', token)
                .end((err, response) =>{
                    response.should.have.status(500);
                    done();
                });
        });

        it('it should not POST any images due to unauthorized access', (done) => {
            chai.request(server)
                .post('/api/multiple/imagesUpload')
                .end((err, response) =>{
                    response.should.have.status(401);
                    response.text.should.be.eq("Access Denied");
                    done();
                });
        });
    });
});