const request = require("supertest")
const app = require("../../app")

describe("Test the /servers path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/servers")
      .expect(200)
  })
})
