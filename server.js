const express = require("express");
const cors = require("cors");
const expressJSDocSwagger = require("express-jsdoc-swagger");

// Configuration options for Swagger
const options = {
  info: {
    version: "1.0.0",
    title: "Peaker APIs",
    license: {
      name: "MIT",
    },

    description: "Complete Documentation of the Endpoints of Peaker",
    contact: {
      name: "Peaker",
      email: "info@peaker.com",
    },
  },
  security: {
    BasicAuth: {
      type: "http",
      scheme: "basic",
    },
  },
  filesPattern: "./routes/Auth.js",
  baseDir: __dirname,
  swaggerUIPath: "/api-docs",
  exposeSwagger: true,
  esposeApiDocs: false,
  apiDocsPath: "/v3/api-docs",
  notRequiredAsNullable: true,
};

// Initialization of the ENV variables
require("dotenv").config();

const app = express();

const PORT = 8080 || process.env.PORT;

expressJSDocSwagger(app)(options);

// Middlewares

app.use(cors());
app.use(express.json());

// Routes

//Authentication data Routes

app.use("/auth", require("./routes/Auth"));

// Setting up the server

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
