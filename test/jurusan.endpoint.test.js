// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;
 
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
 
// describe("Jurusan Endpoint", ()=> {
//  it("should be unauthorized to get all jurusan without token", (done) => {
//    chai.request(server)
//    .get('/api/roles')
//    .end((err, res) => {
//      res.should.have.status(401);
//      done();
//    });
//  });
//  it("should be unauthorized to insert new jurusan without token", (done) => {
//    chai.request(server)
//    .post('/api/roles/insert')
//    .end((err, res) => {
//      res.should.have.status(401);
//      done();
//    });
//  });
//  it("should be not found update jurusan without id", (done) => {
//    chai.request(server)
//    .put('/api/roles/update')
//    .end((err, res) => {
//      res.should.have.status(404);
//      done();
//    });
//  });
//  it("should be unauthorized to jurusan roles without token", (done) => {
//    chai.request(server)
//    .delete('/api/roles/delete/:id')
//    .end((err, res) => {
//      res.should.have.status(401);
//      done();
//    });
//  });
// })

// let token;
// describe("Login Admin", ()=> {
//  it("should return token", (done) => {
//    chai.request(server)
//    .get('/auth/admin/login')
//    .auth('alwanhafidzin', 'alwan123')
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      token = res.body.token;
//      done();
//    });
//  });
//  it("should get all jurusan", (done)=> {
//    chai.request(server)
//    .get('/api/jurusan')
//    .set('authorization',`Bearer ${token}`)
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      done();
//    });
//  })
// //  it("should insert new jurusan", (done)=> {
// //    chai.request(server)
// //    .post('/api/jurusan/insert')
// //    .set('authorization',`Bearer ${token}`)
// //    .send({ jurusan:'Management Informatika' })
// //    .end((err, res) => {
// //      expect(err).to.be.null;
// //      res.should.have.status(200);
// //      console.log(res.body.data)
// //      done();
// //    });
// //  })
// //  it("should update jurusan", (done)=> {
// //     chai.request(server)
// //     .put('/api/jurusan/update/5eb2a2b58fb5fe101042fe8e')
// //     .set('authorization',`Bearer ${token}`)
// //     .send({ jurusan:'Management Informatika Update' })
// //     .end((err, res) => {
// //       expect(err).to.be.null;
// //       res.should.have.status(200);
// //       console.log(res.body.data)
// //       done();
// //     });
// //   })
// it("should delete jurusan", (done)=> {
//     chai.request(server)
//     .delete('/api/jurusan/delete/5eb2a2b58fb5fe101042fe8e')
//     .set('authorization',`Bearer ${token}`)
//     .end((err, res) => {
//       expect(err).to.be.null;
//       res.should.have.status(200);
//       console.log(res.body.data)
//       done();
//     });
//   })
// })
