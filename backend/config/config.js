const fs = require('fs');

// Read the database password from the secret file
const dbPasswordFilePath = '/run/secrets/db-password'; // Path to the secret file
const dbPassword = fs.readFileSync(dbPasswordFilePath, 'utf8').trim();

// Construct the database URL
const url = `postgres://postgres:${dbPassword}@db:5432/${process.env.DEV_DATABASE_DB}`;

module.exports = {
  development: {
    url: url,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
  },
};
