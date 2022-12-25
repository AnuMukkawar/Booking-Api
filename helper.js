import {client} from './index.js';


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