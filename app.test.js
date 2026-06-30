const request = require("supertest");
const app = require("./app");
test("GET /health responde ok", async () => {
  const r = await request(app).get("/health");
  expect(r.body.status).toBe("ok");
});