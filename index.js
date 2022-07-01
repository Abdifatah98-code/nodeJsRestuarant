const server =require("./api/server.js");
require("dotenv").config()
const PORT = 4000 || process.env.PORT 


server.listen(PORT,()=>{
    console.log(`\n** Server Running on http://127.0.0.1:${PORT} ***\n`);
})