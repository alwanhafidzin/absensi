const chai  = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
var expect = chai.expect;
 
// Configure chai
chai.use(chaiHttp);
chai.should();
 
describe("Matkul Endpoint", ()=> {
 it("should be unauthorized to get all matkul without token", (done) => {
   chai.request(server)
   .get('/api/matkul')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
 it("should be unauthorized to insert new matkul without token", (done) => {
   chai.request(server)
   .post('/api/matkul/insert')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
 it("should be not found update matkul without id", (done) => {
   chai.request(server)
   .put('/api/matkul/update')
   .end((err, res) => {
     res.should.have.status(404);
     done();
   });
 });
 it("should be unauthorized to delete matkul without token", (done) => {
   chai.request(server)
   .delete('/api/matkul/delete/:id')
   .end((err, res) => {
     res.should.have.status(401);
     done();
   });
 });
})

let token;
describe("Login Admin", ()=> {
 it("should return token", (done) => {
   chai.request(server)
   .get('/auth/admin/login')
   .auth('alwanhafidzin', 'alwan123')
   .end((err, res) => {
     expect(err).to.be.null;
     res.should.have.status(200);
     token = res.body.token;
     done();
   });
 });
 it("should get all matkul", (done)=> {
   chai.request(server)
   .get('/api/matkul')
   .set('authorization',`Bearer ${token}`)
   .end((err, res) => {
     expect(err).to.be.null;
     res.should.have.status(200);
     done();
   });
 })
//  it("should insert new matkul", (done)=> {
//    chai.request(server)
//    .post('/api/matkul/insert')
//    .set('authorization',`Bearer ${token}`)
//    .send({ matkul:'Implementasi Pemrograman Website' })
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      console.log(res.body.data)
//      done();
//    });
//  })
//  it("should update matkul", (done)=> {
//     chai.request(server)
//     .put('/api/matkul/update/5eb2b89a7a02f01f9c7195d7')
//     .set('authorization',`Bearer ${token}`)
//     .send({ matkul:'Pemrograman Website' })
//     .end((err, res) => {
//       expect(err).to.be.null;
//       res.should.have.status(200);
//       console.log(res.body.data)
//       done();
//     });
//   })
// it("should delete matkul with id", (done)=> {
//     chai.request(server)
//     .delete('/api/matkul/delete/5eb2b89a7a02f01f9c7195d7')
//     .set('authorization',`Bearer ${token}`)
//     .end((err, res) => {
//       expect(err).to.be.null;
//       res.should.have.status(200);
//       console.log(res.body.data)
//       done();
//     });
//   })
})
