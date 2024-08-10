require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const expensesRoutes = require("./routes/expenses");

// init app & middleware
const app = express();
app.use(express.json());

// cors
const cors = require("cors");
app.use(cors({ origin: "http://localhost:5177" }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/expenses", expensesRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listens for requests
    app.listen(process.env.PORT, () => {
      console.log("Port Listening on Port:", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
