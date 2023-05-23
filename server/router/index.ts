import express from "express";
import todoRouter from "./todoRouter";
import chartRouter from "./chartRouter";

const router = express.Router();

router.use("/todo", todoRouter);
router.use("/chart", chartRouter);

export default router;