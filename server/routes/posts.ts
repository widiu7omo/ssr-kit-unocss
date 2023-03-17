import { Router } from "express";
/*@ts-ignore*/
import DBClient from "../../services/prisma_client.ts";
var express = require("express");
var router: Router = express.Router();
const dbInstance = DBClient.instance;
router.get("/", async (req, res, next) => {
  const posts = await dbInstance.post.findMany({
    where: { published: true },
    include: { author: true },
  });
  res.json(posts);
});

/**
 * GET https://localhost:3000/api/posts
 */

export { router as postRouter };
