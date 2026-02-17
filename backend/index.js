import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "node:path";

const app = express();
const port = 3000;
const password = "abhay101";

app.use(morgan("combined"));

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname , "../public")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  if (req.body.password === password) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  } else {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  }
});



app.post("/sign-up", (req, res) => {
  res.sendFile(path.join(__dirname , "../public/sign-up.html"));
}); 

app.listen(port, (req, res) => {
  console.log(`hey abhay your server is running on port ${port}`);
});
