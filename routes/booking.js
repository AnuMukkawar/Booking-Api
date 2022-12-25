import express from "express";
const router = express.Router();
import {createRoom} from "../helper.js";

router.post("/", async (req, res) => {
  const details = req.body;
  const result = await createRoom(details);

  res.send(result);
})

export const bookingRouter = router;