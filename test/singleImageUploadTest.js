const { request } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();

chai.use(chaiHttp);

describe("Tech Buddy API", () => {
    // describe('POST /api/register', ()=>{
    //     it('it should create a user', (done) =>{
    //         chai.request(server)
    //             .post('/api/register')
    //             .send({
    //                 name: req,
    //                 email:  req.body.email,
    //                 password:  req.body.password
    //             })
    //             .end((err, response) =>{
    //                 if(err) return done(err);
    //                 response.should.have.status(201);
    //                 response.should.be.a('object');
    //                 done();
    //             })
    //     });
    // });

    describe('POST /api/singleImageUpload', () =>{
        // it('it should POST a single image', (done) => {
        //     chai.request(server)
        //         .post('/api/singleImageUpload')
        //         .end((err, response) =>{
        //             response.header.should.have.property('auth-token').eq('undifined');
        //             response.should.have.status(201);
                    
        //             response.body.should.have.property('message').eq("Image Uploaded Successfully");
        //             done();
        //         });
        // });

        it('it should not POST a single image due to unauthorized access', (done) => {
            chai.request(server)
                .post('/api/singleImageUpload')
                .end((err, response) =>{
                    response.should.have.status(401);
                    response.text.should.be.eq("Access Denied");
                    done();
                });
        });
    });
});