const favicon = require("serve-favicon");
const express = require("express");
const app = express();

let requestCount = 0;

app.use(favicon(__dirname + "/favicon.ico"));

app.get("/", (_, response) => {
  response.write("Courses");
  getResponse(response);
});

app.get("/courses", (_, response) => {
  response.write("Courses");
  getResponse(response);
});

app.get("/students", (_, response) => {
  response.write("Students");
  getResponse(response);
});

app.get("*", (_, response) => {
  response.write("404 - not found");
  getResponse(response);
});

function getResponse(response) {
  response.write(` IT-KAMASUTRA - ${++requestCount}`);
  response.end();
}

app.listen(3003);
