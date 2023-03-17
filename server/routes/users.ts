import { PrismaClient } from "@prisma/client";
import { Router } from "express";
/*@ts-ignore*/
import DBClient from "../../services/prisma_client.ts";
var express = require("express");
var router: Router = express.Router();
const dbInstance = DBClient.instance as PrismaClient;
// GET
router.get("/", async (req, res, next) => {
  const users = await dbInstance.user.findMany();
  res.json(users);
});
// POST

// PATCH
// DELETE
export { router as userRouter };
