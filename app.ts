import * as dotenv from "dotenv";
import express from "express";
import fs from "fs";
import http from "http";
import * as bodyParser from "body-parser";
import { orderRouter } from "./src/routes/orderRouter";

dotenv.config();
const app = express();

app.use(express.static("src"));
app.use(bodyParser.json());
app.use("/orders", orderRouter);

app.get("/", (req, res) => {
  fs.readFile(
    "C:/training-dev/serverlisten" + "/src/index.html",
    "utf8",
    function (err, text) {
      res.send(text);
    }
  );
});

http.createServer(app).listen(process.env.PORT, () => {
  console.log("Node server started running");
});
