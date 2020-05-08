// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;
 
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
 
// describe("Admin Endpoint", ()=> {
//  it("should be unauthorized to get all admin without token", (done) => {
//    chai.request(server)
//    .get('/api/admin')
//    .end((err, res) => {
//      res.should.have.status(401);
//      done();
//    });
//  });
//  it("should be unauthorized to insert new admin without token", (done) => {
//    chai.request(server)
//    .post('/api/admin/insert')
//    .end((err, res) => {
//      res.should.have.status(401);
//      done();
//    });
//  });
//  it("should be not found update admin without id", (done) => {
//    chai.request(server)
//    .put('/api/admin/update')
//    .end((err, res) => {
//      res.should.have.status(404);
//      done();
//    });
//  });
//  it("should be unauthorized to delete admin without token", (done) => {
//    chai.request(server)
//    .delete('/api/admin/delete/:id')
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
//  it("should get all roles", (done)=> {
//    chai.request(server)
//    .get('/api/admin')
//    .set('authorization',`Bearer ${token}`)
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      done();
//    });
//  })
// //  it("should insert new admin", (done)=> {
// //    chai.request(server)
// //    .post('/api/admin/insert')
// //    .set('authorization',`Bearer ${token}`)
// //    .send({ username:'adminvokasi', email:'adminvokasi@gmail.com', nama:'Admin Vokasi',password:'admin123',role:'5eafafcae1a0861fe41f8c0f' })
// //    .end((err, res) => {
// //      expect(err).to.be.null;
// //      res.should.have.status(200);
// //      console.log(res.body.data)
// //      done();
// //    });
// //  })
// //  it("should update admin with id", (done)=> {
// //     chai.request(server)
// //     .put('/api/admin/update/5eb29a2468fa92235459b8e6')
// //     .set('authorization',`Bearer ${token}`)
// //     .send({ username:'adminvokasi', email:'adminvokasi@gmail.com', nama:'Admin Vokasi Update',password:'admin123',role:'5eafafcae1a0861fe41f8c0f' })
// //     .end((err, res) => {
// //       expect(err).to.be.null;
// //       res.should.have.status(200);
// //       console.log(res.body.data)
// //       done();
// //     });
// //   })
// it("should delete admin with id", (done)=> {
//     chai.request(server)
//     .delete('/api/admin/delete/5eb29a2468fa92235459b8e6')
//     .set('authorization',`Bearer ${token}`)
//     .end((err, res) => {
//       expect(err).to.be.null;
//       res.should.have.status(200);
//       done();
//     });
//   })
// })
