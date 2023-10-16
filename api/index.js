const express= require('express');
const userRouter=require('./user-routes');


// var userRoutes = require("./user-routes");

const listen_port = 8000

const app = express()
// app.use(express.json());
// app.use(cors({ origin: "*" }));
app.use(express.json());
 app.use("/", userRouter);
 

app.listen((listen_port),()=>{
    console.log("App listening to port 8000");
})

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });