const fs = require("fs");

const readFileSync = (filename) => fs.readFileSync(filename).toString("utf8");

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
      ? readFileSync(process.env.DATABASE_PASSWORD)
      : null,
    database: process.env.DATABASE_DB,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
      ? readFileSync(process.env.DATABASE_PASSWORD)
      : null,
    database: process.env.DATABASE_DB,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
      ? readFileSync(process.env.DATABASE_PASSWORD)
      : null,
    database: process.env.DATABASE_DB,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
};
