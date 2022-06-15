const express = require("express");
const connection = require("./Database/db");
const userAuthRouter = require("./routes/userAuth.route");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(cors())
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`KFC API Server started on localhost:${PORT}`);
});

server.use("/Auth", userAuthRouter);

const PORT = process.env.PORT || 8080;

server.listen(PORT, async () => {
  await connection;
  console.log("Connected to Database");
  console.log(`🌎 started on http://localhost:${PORT}/`);
});
