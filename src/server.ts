import { createServer, IncomingMessage, ServerResponse } from "http";

const port =5000;
const server = createServer((req:IncomingMessage,res: ServerResponse)=>{
    console.log(`Server is running on Port ${port}`);

    // console.log(req.url);
    // console.log(req.method);
    
    const url = req.url;
    const method = req.method;

    console.log("URL and Method ", url, method );
    
if (url ==="/" && method=== "GET"){
console.log("This is Root Route.");

}else{
console.log("This Route is not defined.");
}
    
});

server.listen(5000, ()=>{
    console.log("Server is running successfully!!");
    
});

