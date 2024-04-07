const express = require("express");
const router = require("./routes/index")
const cors = require("cors");
const { json } = require("body-parser")

const app = express();

app.use(cors());
app.use(json());

app.use("/api/v1", router);

app.listen(3000);