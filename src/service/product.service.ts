import fs from "fs";
import path from "path";

const filePath =path.join((process.cwd()),"./src/database/db.json");


export const productService =()=>{

const product = fs.readFileSync(filePath, "utf-8");
console.log(product);

return JSON.parse(product);
};