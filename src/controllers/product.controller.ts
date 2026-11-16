import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
import type { IProduct } from "../types/product";

const productController = (req:IncomingMessage, res: ServerResponse)=>{

    const url = req.url;
    const method = req.method;

    console.log("URL and Method ", url, method );

    const urlParams = url?.split("/");
    console.log(urlParams);
    const id= urlParams && urlParams[1]==="products"? Number(urlParams[2]):null;
    console.log(id);
    

    if(url=== "/products" && method=== "GET" ){

//         const products = [
//             {
//                 id: 1,
//                 name: "Taif's Cat",
//                 price: 300
//             },
//    {
//                 id: 2,
//                 name: "Jas's Cat",
//                 price: 400
//             }

//         ]

     const products=   productService();

res.writeHead(200, {"content-type":"application/json"});
res.end(JSON.stringify( {Message:"Products retrieved successfully!", 
    data : products,
}));

    }else if
    (method==="GET" && id !==null){
        
const products=   productService();
const product = products.find((p:IProduct)=>p.id===id);

res.writeHead(200, {"content-type":"application/json"});
res.end(JSON.stringify( {Message:"Products retrieved successfully!", 
    data : product,
}));
    }

};

export default productController;