const express = require("express");
const httpError = require("./models/http-error");
const mongoose = require("mongoose");
const fresherRoutes = require("./routes/freshers-routes");
const taskRoutes = require("./routes/tasks-routes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

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

const port = process.env.PORT || 5000;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.PASSWORD}@cluster0.2n8ck.mongodb.net/freshers-website?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port);
    console.log("Server started successfully👍 at ", port);
  })
  .catch((err) => {
    console.log(err.message);
  });
