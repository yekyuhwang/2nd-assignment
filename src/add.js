const { request } = require("express");
const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/p1", (request, response) => {
  response.render("page1");
});

app.get("/p2", (request, response) => {
  response.render("page2");
});

app.get("/p3", (request, response) => {
  response.render("page3");
});

app.get("/p4", (request, response) => {
  response.render("page4");
});

app.get("/p5", (request, response) => {
  response.render("page5");
});

app.listen(3333, () => {
  console.log("3333 port server start");
});
