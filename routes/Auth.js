const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../utils/dbconnection");
const jwtGenerator = require("../utils/jwtGenerator");
const authorization = require("../middlewares/authorization");

// Swagger Documentation for Register
/**
 * Token
 * @typedef {object} Token
 * @property {string} token.required - Token
 */

/**
 * POST /auth/register
 * @tags Sign In
 * @summary This is the register endpoint
 * @param {string} email.form.required - email
 * @param {string} password.form.required - password
 * @return {Token} 200 - Returns a JWT Token
 */

// Resgister Route

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifying if user already exists
    const user = await pool.query(
      "SELECT * FROM users WHERE user_email = $1;",
      [email]
    );
    if (user.rows.length !== 0) {
      return res.status(401).json("Usuario ya existente");
    }

    // Encrypting the password
    const saltRount = 10;
    const salt = await bcrypt.genSalt(saltRount);
    const bcryptesPassword = await bcrypt.hash(password, salt);

    // Saving new user
    const newUser = await pool.query(
      "INSERT INTO users (user_email, user_password) VALUES ($1, $2) RETURNING *;",
      [email, bcryptesPassword]
    );

    // Generating the JWT for the new user
    const token = jwtGenerator(newUser.rows[0].id);
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Server error");
  }
});

// Swagger Documentation for Login
/**
 * POST /auth/login
 * @tags Log In
 * @summary This is the login endpoint
 * @param {string} email.form.required - email
 * @param {string} password.form.required - password
 * @return {Token} 200 - Returns a JWT Token
 */

// Login Route

router.post("/login", async (req, res) => {
  try {
    // Verifying the email
    const { email, password } = req.body;
    const user = await pool.query(
      "SELECT * FROM users WHERE user_email = $1;",
      [email]
    );
    if (user.rows.length === 0) {
      return res.status(401).json("Credenciales incorrectas!");
    }
    // Verifying the password
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    if (!validPassword) {
      return res.status(401).json("Credenciales incorrectas!");
    }

    // Generating the JWT token for the user
    const token = jwtGenerator(user.rows[0].id);
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Server error");
  }
});

// Swagger Documentation for Authorization
/**
 * GET /auth/is-authenticated
 * @tags Authorization
 * @summary This is the authorization endpoint
 * @param {string} token.header - JWT Token
 * @return {string} 200 - Returns an true if the user is authenticated, otherwise returns "unauthorized"
 */

// Authorization Route

router.get("/is-authenticated", authorization, async (req, res) => {
  try {
    // Return true after passing through the authorization middleware
    return res.status(200).json(true);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Server error");
  }
});

module.exports = router;
