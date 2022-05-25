import express from "express";
import cors from "cors";
import popisKnjiga from "./popisKnjiga.json";

const app = express();
app.use(cors());
const port = 8000;

app.listen(port, () => console.log(`SLUŠA ${port}`));

app.get("/", (req, res) => {
  res.send(popisKnjiga);
});

app.get("/:isbn", (req, res) => {
  const { isbn } = req.params;
  const found = popisKnjiga.find((element) => element.isbn == isbn);
  res.send(found);
});
console.log("Ružić forever");
