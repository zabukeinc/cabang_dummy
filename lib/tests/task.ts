import * as chai from "chai";
import chaiHttp = require("chai-http");
import { NextFunction, response } from "express";
import { Response } from "superagent";
import { expect } from "chai";
const server = require("../server");

chai.should();
chai.use(chaiHttp);

describe("Services branch API", () => {
  /**
   * Branch GET end point
   */

  describe("Route GET /branch", () => {
    it("Should GET to /branch", (done: NextFunction) => {
      chai
        .request(server)
        .get("/branch")
        .end((err: any, res: Response) => {
          res.should.have.status(200);
          expect(res).to.be.a("object");
          done();
        });
    });

    it("Should NOT GET to /branch", (done: NextFunction) => {
      chai
        .request(server)
        .get("/branchs")
        .end((err: any, res: Response) => {
          res.should.have.status(404);
          expect(res).to.be.a("object");
          done();
        });
    });
  });

  /**
   * Branch GET BY ID end point
   */

  describe("Route GET by ID /branch/:id", () => {
    let correctBranchId = 79;
    it("Should GET Data Branch by ID to /branch/:id", (done: NextFunction) => {
      chai
        .request(server)
        .get(`/branch/${correctBranchId}`)
        .end((err: any, res: Response) => {
          res.should.have.status(200);
          expect(res).to.be.a("object");
          done();
        });
    });
    let wrongBranchId = 10;
    it("Should NOT GET Data Branch by ID to /branch/:id", (done: NextFunction) => {
      chai
        .request(server)
        .get(`/branch/${wrongBranchId}`)
        .end((err: any, res: Response) => {
          res.should.have.status(404);
          expect(res).to.be.a("object");
          done();
        });
    });
  });

  /**
   * Branch POST end point
   */
  describe("Route POST data /branch", () => {
    it("Should add branch data to /branch", (done: NextFunction) => {
      chai
        .request(server)
        .post("/branch")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          branch_name: "TestingBranchName",
          address: "Testing Address",
          city: "Testing City",
          province: "Testing Province",
          postal_code: 40971,
          country: "Indonesia",
          is_active: 1,
          phone: 221323,
          email: "testEmail@gmail.com",
          web_address: "http://foo.com",
          createdAt: "2019-06-14T11:12:17.606Z",
        })
        .end((err: any, res: Response) => {
          res.should.have.status(201);
          done();
        });
    });

    it("Should not add branch to /branch", (done: NextFunction) => {
      chai
        .request(server)
        .post("/branch")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          branch_name: "__SELECT", //wrong input
          address: "Testing Address",
          city: "Testing City",
          province: "Testing Province",
          postal_code: 40971,
          country: "Indonesia",
          is_active: 1,
          phone: 221323,
          email: "testEmail@sad.com",
          web_address: "http://foo.com",
          createdAt: "2019-06-14T11:12:17.606Z",
        })
        .end((err: any, res: Response) => {
          res.should.have.status(500);
          done();
        });
    });
  });

  /**
   * Branch UPDATE end point
   */

  describe("Route PUT branch to /branch/:id", () => {
    let correctBranchId = 79;
    let wrongBranchId = 10;
    const dataBranchUpdate = {
      branch_name: "updated", //wrong input
      address: "Testing Address updated",
      city: "Testing City updated",
      province: "Testing Province updated",
      postal_code: 40971,
      country: "Indonesia",
      is_active: 1,
      phone: 221323,
      email: "testEmail@sad.com",
      web_address: "http://foo.com",
      updatedAt: "2020-06-14T11:12:17.606Z",
    };

    it("Should update branch data to /branch/:id", (done: NextFunction) => {
      chai
        .request(server)
        .put(`/branch/${correctBranchId}`)
        .send(dataBranchUpdate)
        .end((err: any, res: Response) => {
          res.should.have.status(202);
          done();
        });
    });

    it("Should not update branch data to /branch/:id because of input error", (done: NextFunction) => {
      chai
        .request(server)
        .put(`/branch/${correctBranchId}`)
        .send({
          branch_name: "__updated", //wrong input
          address: "Testing Address updated",
          city: "Testing City updated",
          province: "Testing Province updated",
          postal_code: 40971,
          country: "Indonesia",
          is_active: 1,
          phone: 221323,
          email: "testEmail@sad.com",
          web_address: "http://foo.com",
        })
        .end((err: any, res: Response) => {
          res.should.have.status(500);
          done();
        });
    });

    it("Should not update branch data to /branch/:id {id not found}", (done: NextFunction) => {
      chai
        .request(server)
        .put(`/branch/${wrongBranchId}`)
        .send(dataBranchUpdate)
        .end((err: any, res: Response) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  /**
   * Branch DELETE end point
   */

  describe("Route DELETE data by id /branch/:id", () => {
    let correctBranchId = 80;
    it("Should delete branch by ID to /branch:id", (done: NextFunction) => {
      chai
        .request(server)
        .delete(`/branch/${correctBranchId}`)
        .end((err: any, res: Response) => {
          res.should.have.status(202);
          done();
        });
    });

    let wrongBranchId = 10;
    it("Should not delete branch by ID to /branch:id", (done: NextFunction) => {
      chai
        .request(server)
        .delete(`/branch/${wrongBranchId}`)
        .end((err: any, res: Response) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
