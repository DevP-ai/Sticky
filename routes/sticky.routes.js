import express from "express";
import {creatSticky, getSticky} from "../controller/sticky.controller.js"
const route = express.Router();

route.get("/health-check", (req,res) =>{
    res.send("Sticky Note Api running");
});


//Create Sticky Note
route.post("/create-sticky",creatSticky);

route.get("/get-stickies",getSticky)

export default route;