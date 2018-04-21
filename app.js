const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://localhost/simple-job-posting-api");

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
