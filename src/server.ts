import { createServer, IncomingMessage, ServerResponse } from "http";
import routeHandler from "./routes/route";

const port =5000;


const server = createServer((req:IncomingMessage,res: ServerResponse)=>{
    console.log(`Server is running on Port ${port}`);

    // console.log(req.url);
    // console.log(req.method);
  
routeHandler(req,res);

});





server.listen(5000, ()=>{
    console.log("Server is running successfully!!");
    
});

