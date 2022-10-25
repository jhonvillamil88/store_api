
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url= `http://localhost:3800/api`;


describe('Request GET to list OK: ',()=>{
    it('should return state 200', (done) => {
        chai.request(url)
            .get(`/list`)
            .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.IwdaBxBHvBMLp6Ig4t4detTnQOiE2VN5CIF-09QQ-G0')
            .end( function(err,res){
                expect(res).to.have.status(200);
                done();
            });
    });
});


describe('Request GET to list no header: ',()=>{
    it('should return state 403', (done) => {
        chai.request(url)
            .get(`/list`)
            .end( function(err,res){
                expect(res).to.have.status(403);
                done();
            });
    });
});


describe('Request GET to list token wrong: ',()=>{
    it('should return state 404', (done) => {
        chai.request(url)
            .get(`/list`)
            .set('authorization', 'eyJhbGciOiJIUz')
            .end( function(err,res){
                expect(res).to.have.status(404);
                done();
            });
    });
});
   
   