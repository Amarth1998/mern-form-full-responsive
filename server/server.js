import express from "express"
import dotenv from "dotenv"
import cors from 'cors'; //we use this coz we are running our firstend and backend on diff server port .
import userRoutes  from "./routes/userRoute.js";
import  connectDb from './config/db.js'; // db connection 

const app = express();
dotenv.config(); //configure env

// lets tackle cors 
const corsOptions={
    origin:["http://localhost:5173"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE" ,
    credentials:true
}
app.use(cors(corsOptions));    //cors is a middle ware that will handle the cross-origin resource sharing (CORS) policy. 
app.use(express.json( ));      //middleware to parse json data in the request body ,use for POST req



app.get("/", (req, res) => { res.send("amarth") })

//routes
app.use('/api/signup', userRoutes)
app.use('/api/login', userRoutes)


// call function if db connect
const port = process.env.PORT || 5000;
connectDb().then(()=>{
    app.listen(port, () => {console.log("server connect")});
})
