import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productController = (req:IncomingMessage, res: ServerResponse)=>{

        const url = req.url;
    const method = req.method;

    console.log("URL and Method ", url, method );

    if(url=== "/products" && method=== "GET" ){

        const products = [
            {
                id: 1,
                name: "Taif's Cat",
                price: 300
            },
   {
                id: 2,
                name: "Jas's Cat",
                price: 400
            }

        ]

        productService();

res.writeHead(200, {"content-type":"application/json"});
res.end(JSON.stringify( {Message:"Products retrieved successfully!", 
    data : products,
}));

    }



};

export default productController;