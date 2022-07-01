const express =require("express");

const ownerDb =require("./owner-model");

const router =express.Router();

router.get("/",async (req,res)=>{
    try {
        const owners = await ownerDb.find(req.query);
        res.status(200).json(owners);
    } catch (error) {
        res.status(500).json({Message:"failed to get owners"});
    }
});

router.get("/:id",async (req,res)=>{
    try {
        const owners = await ownerDb.findById(req.params.id);
        if (owners ==null) {
            res.status(404).json({Message:"owner not found"});
        }else{
            res.status(200).json(owners);
        }
    } catch (error) {
        res.status(500).json({Message:"failed to get owner", error:error['sqlMessage']});
    }
});
// router.get("/owner/:id",async (req,res)=>{
//     try {
//         const owners = await ownerDb.findByOwner(req.params.id);
//         if (owners) {
//             res.status(200).json(owners);
//         }else{
//             res.status(404).json({Message:"owner not found"});
//         }
//     } catch (error) {
//         res.status(500).json({Message:"failed to owner owner"});
//     }
// });

router.post("/",async (req,res)=>{
    try {
    console.log("====");
       //console.log(req.body)
        const owners = await ownerDb.add(req.body);
        res.status(201).json(owners);
    } catch (error) {
        res.status(500).json({Message:"failed to add owner" ,error:error.sql, sqlerr:error.sqlMessage});
    }
});

router.put("/:id",async (req,res)=>{
    try {
        const owners = await ownerDb.update(req.params.id,req.body);
        if (owners ==null || owners==0) {
            res.status(404).json({Message:`owner Id:${req.params.id} not found`});
        }else{
            res.status(200).json(owners);
        }
    } catch (error) {
        res.status(500).json({Message:"failed to update owner",error:error.sqlMessage,err:error.sql});
    }
});
router.delete("/:id",async (req,res)=>{
    try {
        const owners = await ownerDb.remove(req.params.id);
        console.log(owners);
        if (owners ==null || owners==0) {
            res.status(404).json({Message:`owner Id: ${req.params.id} not found`});
        }else{
            res.status(200).json({Message: "owner deleted successfully"});
        }
    } catch (error) {
        res.status(500).json({Message:"failed to delete owner"});
    }
});



module.exports =router;