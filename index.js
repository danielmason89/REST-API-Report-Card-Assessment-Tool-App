const express = require("express");
let app = express();
let port = process.env.DEV_PORT || 4000;
let errorHelper = require("./helpers/errorHelpers");
let cors = require("cors");

let router = express.Router();
app.use(express.json());

app.use(cors());

router.get("/", function (req, res, next) {
  res.status(200).json({
    status: 200,
    statusText: "OK",
    message: "All Data Received",
    data: "./data/db.json",
  });
});

router.get("/:id", function (req, res, next) {
  res.status(200).json({
    status: 200,
    statusText: "OK",
    message: "All Data Received",
    data: "./data/db.json",
  });
});

app.use("/api/", router);
app.use(errorHelper.logErrorToConsole);
app.use(errorHelper.clientErrorHandler);
app.use(errorHelper.errorHandler);

let server = app.listen(3000, function () {
  console.log(`Listening on ${port}...`);
});
