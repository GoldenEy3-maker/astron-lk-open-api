import express from "express";
import { generateScalarUI } from "openapi-metadata/ui";

const app = express();
app.use(express.static("public"));
const port = 8080;

app.get("/", (req, res) => {
  const ui = generateScalarUI("/schema.yaml");
  res.type("html").send(ui);
});

app.listen(port, () => {
  console.log(`Open Api listening on port ${port}`);
});

export default app;
