import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/',(req, res) => {
//     res.send("This is a stack overflow clone API")
// })

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);

//static files
app.use(express.static(path.join(__dirname,'../client/build')))
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'../client/build/index.html'))
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
