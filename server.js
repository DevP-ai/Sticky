import express from "express"
import cors from "cors"
import stickyRoutes from "./routes/todo.routes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();


//Middleware
app.use(cors());
app.use(express.json());

//Connect to DB
connectDB();

//Test route

// app.get("/", (req,res) => {
//     res.send("Sticky API is running");
// });


//Routes
app.use("/api",stickyRoutes);

//Start Server
const PORT = process.env.PORT || 3002
app.listen(PORT, ()=> {
    console.log(`Server start at: http://localhost:${PORT}`);
});