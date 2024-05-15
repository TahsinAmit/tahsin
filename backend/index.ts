import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json())

app.post("/survey", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
