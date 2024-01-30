import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoutes.js";
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(
    cors({
    credentials: true,
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type'],
    })
  );

// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));


app.get("/", (req, res) => {
    console.log(req);
    return res.status(200).send("welcom to book store web app")
});


app.use('/books', booksRoute);

mongoose.connect(process.env.DATABASE_URL).then(() => { console.log("DB  is Successfulllll") })
    .catch((error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);

    });



app.listen(process.env.PORT, () => {
    console.log(`App is listening at port : ${process.env.PORT} `);
});
