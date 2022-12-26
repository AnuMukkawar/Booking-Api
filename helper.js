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

export async function getCustomerDetails(req) {
  
  return await client
    .db("Booking")
    .collection("Customer")
    .aggregate([
      { $lookup:
      {
         from: "Room",
         localField: "Room_name",
         foreignField: "Room_id",
         as: "Room_name"
      }
  }]).toArray();
}

export async function getRoomDetails(req) {
  return await client
    .db("Booking")
    .collection("Room")
    .aggregate([
      { $lookup:
      {
         from: "Customer",
         localField: "Customer_name",
         foreignField:"ObjectId(_id)",
         as: "Customer_name"
      }
  }]).toArray();
}