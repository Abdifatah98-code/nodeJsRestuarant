const express =require("express");
const restaurantRouter =require("../api/restaurant/restaurant-router");
const ownerRouter =require("../api/owner/owner-router");


const server=express();

server.use(express.json());


// server.use("/api",dbConfig);
server.use("/api/restaurants",restaurantRouter);
server.use("/api/owners",ownerRouter);


// server.get("/",(req,res)=>{
//     // console.log(6);
//     res.json("Hellow From Express");
 
// })

server.use("*",(req,res)=>{
    // cach all 404 errors
    console.log();
    res.status(404).json({message:`${req.method} ${req.basUrl} not Found`})
})

module.exports =server;

