import express from "express";

const route = express.Router();

route.get("/health-check", (req,res) =>{
    res.send("Sticky Note Api running");
});

export default route;