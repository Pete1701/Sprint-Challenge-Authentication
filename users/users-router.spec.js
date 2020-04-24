const request = require("supertest");
const usersRouter = require("./users-router.js");
const db = require("../database/dbConfig.js");

describe("usersRouter", function() {
    describe("get", function() {
        it("should return 400", function() {
            return request(usersRouter)
            .get("/api/jokes")
            .then(res => {
                expect(res.status).toBe(400);
            });
        });
    });
})