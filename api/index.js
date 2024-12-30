import express from "express";
import { readFile } from "fs";
import { generateScalarUI } from "openapi-metadata/ui";

const app = express();
const port = 8080;

app.get("/schema", (req, res) => {
  readFile("/api-schema.json", (err, data) => {
    if (err) {
      res.status(500).send({ error: "Failed to read API schema file" });
      return;
    }

    res.header("Content-Type", "application/json").send(data);
  });
});

app.get("/", (req, res) => {
  const ui = generateScalarUI("/schema");
  res.type("html").send(ui);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
