const request = require("supertest");
const server = require("../api/server.js");
const db = require("../database/dbConfig.js");

describe("server", function() {
  describe("server", function() {    

    it("should return JSON", function() {      
      return request(server)
        .get("/api/jokes")
        .then(res => {          
          expect(res.type).toMatch(/json/i);
        });
    });

    describe("view a joke - authenticated user", () => {
      beforeEach(async () => {
        await db("users").truncate;
      });
      it("should return status 200", async () => {
        let res = await request(server)
          .post("/api/auth/register")
          .send({ username: "BBB", password: "123" });
        expect(res.status).toBe(201);
      });
      it("should return a token", async () => {
        res = await request(server)
          .post("/api/auth/login")
          .send({ username: "BBB", password: "123" });
        expect(res.headers.token).toBe();
      });
      it("should return jokes", async () => {
        res = await request(server)
          .get("/api/jokes")
          .auth("BBB", "123")
          .set("Authorization", res.body.token);
        expect(res.type).toBe("application/json");
      });
    });
  });
});