const crypto = require('crypto');

// Generate a random string
const generateRandomString = (length) => {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') // Convert to hexadecimal format
        .slice(0, length); // Trim to desired length
};

// Length of the JWT secret key (adjust as needed)
const length = 64;

// Generate and output the random string
const jwtSecret = generateRandomString(length);
console.log('Generated JWT Secret Key:', jwtSecret);
