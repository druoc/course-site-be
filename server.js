const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const DBconnection = require("./config/db");

dotenv.config({
  path: "./config/config.env",
});

DBconnection();

const bootcamps = require("./routes/bootcamps");
const app = express();

//Morgan logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

const server = app.listen(
  process.env.PORT || 5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
