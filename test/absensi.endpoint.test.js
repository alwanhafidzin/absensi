// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;
 
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
 
// describe("Absensi Endpoint", ()=> {
//  it("should be unauthorized to get all absensi without token", (done) => {
//    chai.request(server)
//    .get('/api/absensi')
//    .end((err, res) => {
//      res.should.have.status(401);
//      done();
//    });
//  });
//  it("should be unauthorized to insert new absensi without token", (done) => {
//    chai.request(server)
//    .post('/api/absensi/insert')
//    .end((err, res) => {
//      res.should.have.status(401);
//      done();
//    });
//  });
//  it("should be not found update absensi without id", (done) => {
//    chai.request(server)
//    .put('/api/absensi/update')
//    .end((err, res) => {
//      res.should.have.status(404);
//      done();
//    });
//  });
//  it("should be unauthorized to delete absensi without token", (done) => {
//    chai.request(server)
//    .delete('/api/absensi/delete/:id')
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
//  it("should get all absensi", (done)=> {
//    chai.request(server)
//    .get('/api/absensi')
//    .set('authorization',`Bearer ${token}`)
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      done();
//    });
//  })
// //  it("should insert new absensi", (done)=> {
// //    chai.request(server)
// //    .post('/api/absensi/insert')
// //    .set('authorization',`Bearer ${token}`)
// //    .send({ tatap_muka:'20',alpha:'1',izin:'3',sakit:'0',hadir:'16' })
// //    .end((err, res) => {
// //      expect(err).to.be.null;
// //      res.should.have.status(200);
// //      console.log(res.body.data)
// //      done();
// //    });
// //  })
// //  it("should update absensi", (done)=> {
// //     chai.request(server)
// //     .put('/api/absensi/update/5eb2b2f6eb57d01c78de10ee')
// //     .set('authorization',`Bearer ${token}`)
// //     .send({ tatap_muka:'20',alpha:'1',izin:'3',sakit:'2',hadir:'14' })
// //     .end((err, res) => {
// //       expect(err).to.be.null;
// //       res.should.have.status(200);
// //       console.log(res.body.data)
// //       done();
// //     });
// //   })
// it("should delete absensi with id", (done)=> {
//     chai.request(server)
//     .delete('/api/absensi/delete/5eb2b2f6eb57d01c78de10ee')
//     .set('authorization',`Bearer ${token}`)
//     .end((err, res) => {
//       expect(err).to.be.null;
//       res.should.have.status(200);
//       console.log(res.body.data)
//       done();
//     });
//   })
// })
