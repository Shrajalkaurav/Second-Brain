import express from "express";
import { userMiddleware } from "../../middleware";
import { ContentModel } from "../../db/db";

const router = express.Router();

router.post("/", userMiddleware, async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;
  const title = req.body.title;
  await ContentModel.create({
    link,
    type,
    title,
    //@ts-ignore
    userId: req.userId,
    tags: [],
  });
  res.json({
    message: "Content added",
  });
});

router.get("/", userMiddleware, async (req, res) => {
  //@ts-ignore
  const userId = req.userId;

  const content = await ContentModel.find({
    userId: userId,
  }).populate("userId");
  res.json({
    content,
  });
});
router.delete("/", userMiddleware, async (req, res) => {
  const contentId = req.body.contentId;

  await ContentModel.deleteMany({
    contentId,
    userId: req.userId,
  });

  res.json({
    message: "Deleted",
  });
});

module.exports = router;
