const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// const mongoose = require("mongoose");
// const DB_HOST =
//   "mongodb+srv://Katarina:hZQSkv16W923m0Ty@cluster0.6y1zw7q.mongodb.net/db-contacts?retryWrites=true&w=majority";
// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("Database connect"))
//   .catch((err) => console.log(err));
// console.log(process.env);

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;

// hZQSkv16W923m0Ty
// Katarina
// mongodb+srv://Katarina:hZQSkv16W923m0Ty@cluster0.6y1zw7q.mongodb.net/db-contacts?retryWrites=true&w=majority
