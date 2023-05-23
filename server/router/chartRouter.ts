import express from "express";
import { dataAdd, dataSelectLine, dataSelectMulti } from "../api/chart";

const router = express.Router();

router.post("/add", dataAdd);
router.get("/selectLine", dataSelectLine);
router.get("/selectMulti", dataSelectMulti);

export default router;