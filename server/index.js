import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

//general settings to every express app
app.use(bodyParser.json({ limit: "30mb", extended: true })); //we used limit because we are going to send pics
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//connect to MongoDB
const CONNECTION_URL =
  "mongodb+srv://fedi:fedi1997@cluster0.tz7flyq.mongodb.net/memories?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, UseUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) =>
    console.log(err.message || "Could not establish connection ")
  );
