import express from "express"
import cors from "cors"
import stickyRoutes from "./routes/todo.routes.js";

const app = express();
const PORT = 3001;

//Middleware
app.use(cors());
app.use(express.json());

//Test route

// app.get("/", (req,res) => {
//     res.send("Sticky API is running");
// });


//Routes
app.use("/api",stickyRoutes);

//Start Server
app.listen(PORT, ()=> {
    console.log(`Server start at: http://localhost:${PORT}`);
});