import express from 'express';
import {MongoClient} from 'mongodb';
import dotenv from 'dotenv'
import cors from 'cors';
import {bookingRouter} from './routes/booking.js'

dotenv.config()

const app=express();
app.use(cors());

const port=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
// const MONGO_URL="mongodb://localhost";

async function createConnection(){
    const client=new MongoClient(MONGO_URL);
    await client.connect();
    return client;
}

export const client =await createConnection();
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("Hello");
// });

app.use("/",bookingRouter);

app.listen(port,()=>console.log("Server is started ",port));