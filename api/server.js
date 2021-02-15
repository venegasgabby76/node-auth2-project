const express = require("express");
const helmet = require("helmet");
const cors = require("cors")
const errorHandler = require("./errorHandler");

const usersRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
    res.json({
        message: "Your api is up and running, get to work"
    })
})


// this will handle all of our next error calls 
server.use(errorHandler);


module.exports = server;