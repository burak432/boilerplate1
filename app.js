const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//ejs
const ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//static
app.use(express.static("public"));
app.set("public", path.join(__dirname, "/public"));

//form parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///////////////////// ROUTES /////////////////////
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, (req, res) => {
  console.log(`server is up on port ${port}`);
});
