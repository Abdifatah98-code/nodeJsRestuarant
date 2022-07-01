const restaurant =require("../restaurant/restaurant-model");
module.exports={
    async requireName(req,res,next){
        const name = req.body.name;
        if (!name) {
            return res.status(400).json({Message:"Name Is required"})
        }
        next();
    }
}