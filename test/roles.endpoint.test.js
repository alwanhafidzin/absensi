// const chai  = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../bin/www');
// var expect = chai.expect;
 
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
 
// describe("Roles Endpoint", ()=> {
//  it("should be unauthorized to get all roles without token", (done) => {
//    chai.request(server)
//    .get('/api/roles')
//    .end((err, res) => {
//      res.should.have.status(401);
//      done();
//    });
//  });
//  it("should be unauthorized to insert new roles without token", (done) => {
//    chai.request(server)
//    .post('/api/roles/insert')
//    .end((err, res) => {
//      res.should.have.status(401);
//      done();
//    });
//  });
//  it("should be not found update roles without id", (done) => {
//    chai.request(server)
//    .put('/api/roles/update')
//    .end((err, res) => {
//      res.should.have.status(404);
//      done();
//    });
//  });
//  it("should be unauthorized to delete roles without token", (done) => {
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
//  it("should get all roles", (done)=> {
//    chai.request(server)
//    .get('/api/roles')
//    .set('authorization',`Bearer ${token}`)
//    .end((err, res) => {
//      expect(err).to.be.null;
//      res.should.have.status(200);
//      done();
//    });
//  })
// //  it("should insert new roles", (done)=> {
// //    chai.request(server)
// //    .post('/api/roles/insert')
// //    .set('authorization',`Bearer ${token}`)
// //    .send({ name:'akademik', name_long:'Akademik Vokasi Ub', priority: 2, description: 'Mengatur absensi di Vokasi' })
// //    .end((err, res) => {
// //      expect(err).to.be.null;
// //      res.should.have.status(200);
// //      console.log(res.body.data)
// //      done();
// //    });
// //  })
// //  it("should update roles", (done)=> {
// //     chai.request(server)
// //     .put('/api/roles/update/5eb2750ecd17c71f343a7a41')
// //     .set('authorization',`Bearer ${token}`)
// //     .send({ name:'akademik_terupdate',name_long:'Akademik Vokasi UB update' })
// //     .end((err, res) => {
// //       expect(err).to.be.null;
// //       res.should.have.status(200);
// //       console.log(res.body.data)
// //       done();
// //     });
// //   })
// // it("should delete roles", (done)=> {
// //     chai.request(server)
// //     .delete('/api/roles/delete/5eb2750ecd17c71f343a7a41')
// //     .set('authorization',`Bearer ${token}`)
// //     .end((err, res) => {
// //       expect(err).to.be.null;
// //       res.should.have.status(200);
// //       console.log(res.body.data)
// //       done();
// //     });
// //   })
// })
