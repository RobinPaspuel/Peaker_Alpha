const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtGenerator = (id) => {
    const payload = {
        user: id
    }
    return jwt.sign(payload, process.env.JWTSECRETKEY, {
        expiresIn: process.env.EXPIRATION_LIMIT
    });
}

module.exports = jwtGenerator;