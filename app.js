const express = require("express");
const app = express();
app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.get("/tasks", (_req, res) => res.json([{ id: 1, nome: "Estudar AZ-400" }]));
if (require.main === module) app.listen(3000);
module.exports = app;