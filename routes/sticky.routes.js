import express from "express";
import {creatSticky} from "../controller/sticky.controller.js"

const route = express.Router();

route.get("/health-check", (req,res) =>{
    res.send("Sticky Note Api running");
});


//Create Sticky Note
route.post("/create-sticky",creatSticky);

export default route;