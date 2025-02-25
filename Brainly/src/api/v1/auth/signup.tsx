import express from "express";
import { UserModel } from "../../../db/db";

const router = express.Router();

router.post("/signup", async (req, res) => {
  //zod validation

  const username = req.body.username;
  const password = req.body.password;

  try {
    await UserModel.create({
      username: username,
      password: password,
    });

    res.status(200).json({
      message: "User signed up",
    });
  } catch (e: any) {
    res.status(411).json({
      message: "An error occured:" + e.message,
    });
  }
});

module.exports = router;
