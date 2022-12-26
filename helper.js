import {client} from './index.js';
import { ObjectId } from "mongodb";


export async function createRoom(details) {
    return await client
      .db("Booking")
      .collection("Room")
      .insertOne(details);
}

export async function bookRoom(details) {
  return await client
    .db("Booking")
    .collection("Customer")
    .insertOne(details);
}


export async function updateRoomStatus(roomid) {
  return await client
    .db("Booking")
    .collection("Room")
    .updateOne({_id:ObjectId(roomid)},
      {
        $set: { bookingStatus: "Booked" }
       },
      {upsert: true });
}