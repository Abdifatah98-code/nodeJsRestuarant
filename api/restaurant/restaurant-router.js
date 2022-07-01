const express =require("express");

const retuarantsDb =require("./restaurant-model");


const router =express.Router();

//const knex = require("../../knexfile");


// router.get("/", async (req,res)=>{
//     try {
//         const connect_meessage = await db("restuarant")
//         console.log(connect_meessage);
//         // .json('students','id','=','std_id')
//         // .join('students', 'studentdetail.id', '=', 'students.std_id')
//         // .join('xalqat', 'students.halqa', '=', 'xalqat.id')
//         // .select({student:'studentdetail.name'}, 'xalqat.name', 'studentdetail.id')

//         res.status(200).json( {Message: connect_meessage});
//     } catch (error) {
//         throw error;        
//     }
// })

const {requireName} =require("../middleware/middleware");

router.get("/",async (req,res)=>{
    try {
        const restaurants = await retuarantsDb.find(req.query);
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({Message:"failed to get restaurants", error:error});
        console.log(req.query);
    }
});

router.get("/:id",async (req,res)=>{
    try {
        const restaurants = await retuarantsDb.findById(req.params.id);
        if (restaurants ==null) {
            res.status(404).json({Message:`restaurant Id: ${req.params.id} not  found`});
        }else{
            res.status(200).json(restaurants);
        }
    } catch (error) {
        res.status(500).json({Message:"failed to get restaurant", error:error["sqlMessage"],sql:error['sql']});
    }
});
router.get("/owner/:id",async (req,res)=>{
    try {
        const restaurants = await retuarantsDb.findByOwner(req.params.id);
        if (restaurants) {
            res.status(200).json(restaurants);
        }else{
            res.status(404).json({Message:`restaurant Id:${req.params.id} not found`});
        }
    } catch (error) {
        res.status(500).json({Message:"failed to owner restaurant", error:error.sqlMessage ,err:error.sql});
    }
});

router.post("/",requireName,async (req,res)=>{
    try {
        const restaurants = await retuarantsDb.add(req.body);
        res.status(201).json(restaurants);
    } catch (error) {
        res.status(500).json({Message:"failed to add restaurant"});
    }
});

router.put("/:id",async (req,res)=>{
    try {
        const restaurants = await retuarantsDb.update(req.params.id,req.body);
        if (restaurants ==null || restaurants ==0) {
            res.status(404).json({Message:"restaurant not found"});
        }else{
            console.log(req.body);
            console.log(req.params.id);
            res.status(200).json(restaurants);
        }
    } catch (error) {
        res.status(500).json({Message:"failed to update restaurant",error:error});
    }
});
router.delete("/:id",async (req,res)=>{
    try {
        const restaurants = await retuarantsDb.remove(req.params.id);
        if (restaurants ==null) {
            res.status(404).json({Message:"restaurant not found"});
        }else{
            res.status(200).json(restaurants);
        }
    } catch (error) {
        res.status(500).json({Message:"failed to delete restaurant"});
    }
});



module.exports =router;