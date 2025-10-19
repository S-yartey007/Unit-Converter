import express from "express";
import bodyParser from "body-parser";
import {
  convertLength,
  convertWeight,
  convertTemperature,
} from "./utils/utils.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
  res.redirect("/length");
});

//Length conversion
app.get("/length", (req, res) => {
  res.render("length", { result: null });
});

app.post("/length", (req, res) => {
  const { value, from, to } = req.body;
  const result = convertLength(parseFloat(value), from, to);
  res.render("length", { result });
});

//Weight conversion
app.get("/weight", (req, res) => {
  res.render("weight", { result: null });
});

app.post("/weight", (req, res) => {
  const { value, from, to } = req.body;
  const result = convertWeight(parseFloat(value), from, to);
  res.render("weight", { result });
});

//temperature conversion
app.get("/temperature", (req, res) => {
  res.render("temperature", { result: null });
});

app.post("/temperature", (req, res) => {
  const { value, from, to } = req.body;
  const result = convertTemperature(parseFloat(value), from, to);
  res.render("temperature", { result });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
