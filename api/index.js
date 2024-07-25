import express, { json } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const listen_port=8000;
import userRouter from './user-routes.js';
// import mongoose from 'mongoose';


// const listen_port = 8000
// mongoose.connect(
//     "mongodb://localhost:27017/CertiDapp",
// );

// const database = mongoose.connection;
// database.on("error", (error) => {
//     console.log(error);
// });
// database.once("connected", () => {
//     console.log("Database Connected");
// });

const app = express()
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(cors({origin:"*"}))
app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));

 app.use("/", userRouter);
 

app.listen((listen_port),()=>{
    console.log(`App listening to port ${listen_port}`);
})

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });