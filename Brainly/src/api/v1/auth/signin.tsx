import express from "express";
import { UserModel } from "../../../db/db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../../../config";

const router = express.Router();

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await UserModel.findOne({
    username,
    password,
  });

  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_PASSWORD
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

module.exports = router;
