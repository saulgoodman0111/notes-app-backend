import express from "express";
import dotenv from "dotenv";
import notesRoute from "./routes/notesRoute.js";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());


const PORT = process.env.PORT || 8000;

app.use("/notes", notesRoute);

app.listen(PORT, () => {
  console.log(`server running on port: ${process.env.PORT}`);
});
