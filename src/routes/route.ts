import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controller";

const routeHandler = (req: IncomingMessage, res:ServerResponse)=>{

    const url = req.url;
    const method = req.method;

    console.log("URL and Method ", url, method );
    
if (url ==="/" && method=== "GET"){
console.log("This is Root Route.");

res.writeHead(200, {"content-type":"application/json"});
res.end(JSON.stringify( {Message:"This is Root Route"}));

}else if(url?.startsWith("/products")){
    console.log("This is Products Route.");

    productController(req,res);

}
else{
console.log("This Route is not defined.");

res.writeHead(404, {"content-type":"application/json"});
res.end(JSON.stringify( {Message:"This Root is not defined"}));
}

};

export default routeHandler;
