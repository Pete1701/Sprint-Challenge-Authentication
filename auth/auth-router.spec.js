// const request = require("supertest");
// const authRouter = require("./auth-router.js");
// const db = require("../database/dbConfig.js");

// describe("/register", function () {
//     describe(".authRouter()", function () {
//         it("should return false if the user is missing username or password", function () {
//           expect(authRouter({})).toBe(false);
//           expect(authRouter({ username: "sam" })).toBe(false);
//           expect(authRouter({ password: "sam" })).toBe(false);
//         });
    
//         it("should return true when the user has a username and a password", function () {
//           expect(authRouter({ username: "sam", password: "pass" })).toBe(true);
//         });
//     });



// });