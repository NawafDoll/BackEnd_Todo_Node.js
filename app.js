const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
const goals = require("./modulesGoals/goals");
const router = require("./router/routerGoals");

app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/Target", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());

app.use("/", router);
app.listen(3000, () => console.log("server Running on 3000"));
