import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.31.209:5173"],
    credentials: true,
  })
);

const signupRoute = require("./api/v1/auth/signup");
const signinRoute = require("./api/v1/auth/signin");
const contentRoute = require("./api/v1/content");
const brainShare = require("./api/v1/brain/share");

app.use("/api/v1/auth", signupRoute);
app.use("/api/v1/auth", signinRoute);
app.use("/api/v1/content", contentRoute);
app.use("/api/v1/brain/share", brainShare);

app.listen(3000);
console.log("App is running");
