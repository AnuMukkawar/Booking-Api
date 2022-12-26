import express from "express";
const router = express.Router();
import {createRoom,bookRoom,updateRoomStatus,getCustomerDetails} from "../helper.js";

router.post("/", async (req, res) => {
  const details = req.body;
  const result = await createRoom(details);

  res.send(result);
})

router.post("/book", async (req, res) => {
  const details = req.body;
  const roomid=details.Room_id;
  const result = await bookRoom(details);
  await updateRoomStatus(roomid);
  res.send(result);
})


router.get("/customerDetails", async (req, res) => {

  const result = await getCustomerDetails(req);
  res.send(result);
})
export const bookingRouter = router;