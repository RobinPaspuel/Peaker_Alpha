const express = require("express");
const cors = require("cors");

// Initialization of the ENV variables
require("dotenv").config();

const app = express();

// Middlewares

app.use(cors());
app.use(express.json());

// Routes

//Authentication data Routes

app.use("/auth", require("./routes/Auth"));

// Setting up the server

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
