const server =require("./api/server.js");
require("dotenv").config()
const PORT = process.env.PORT  || 4000 


server.listen(PORT,()=>{
    console.log(`\n** Server Running on http://127.0.0.1:${PORT} ***\n`);
})