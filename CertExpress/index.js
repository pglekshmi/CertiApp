import express,{json} from "express";
import userRoute from "./Routes/userRoute.js";

const app = express();
app.use(json());

app.use('/', userRoute);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})