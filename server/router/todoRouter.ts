import express from "express";
import { todoAdd, todoAll, todoRemove, todoUpdate } from "../api/todo";

const router = express.Router()

router.post("/add", todoAdd);
router.get("/all", todoAll);
router.put("/update/:_id", todoUpdate);
router.delete("/remove/:_id", todoRemove);

export default router;