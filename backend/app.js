const express = require("express");
const mongoose = require("mongoose");
const httpError = require("./models/http-error");
const fresherRoutes = require("./routes/freshers-routes");
const taskRoutes = require("./routes/tasks-routes");

const app = express();

app.use(express.json());

app.use("/api/freshers", fresherRoutes);

app.use("/api/tasks", taskRoutes);

app.use((req, res, next) => {
  return next(new httpError("Could not find the route"));
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Something went wrong !" });
});

mongoose
  .connect(
    "mongodb+srv://conqryash007:ZKVKYUd0nKjdPEwS@cluster0.fbbfu.mongodb.net/freshers-website?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
    console.log("Server started successfully👍");
  })
  .catch((err) => {
    console.log(err.message);
  });
