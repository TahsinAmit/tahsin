import express from "express";
import cors from "cors";
import { dbPromise } from "./lib";
import { surveys } from "./models/survey.schema";


const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(express.json())

app.get("/", (_,res)=>{
  res.render("index.html")
})

app.post("/survey", async(req, res) => {
  const {db} = await dbPromise()
  const result = await db.insert(surveys).values(req.body)
  res.send({result});
});

app.all("",(_,res)=>{
  res.status(404);
  res.send({not_available: 'true'})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
