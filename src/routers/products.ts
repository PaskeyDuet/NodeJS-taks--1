import createNewProduct from "@/handlers/createNewProduct";
import createRemainder from "@/handlers/createRemainder";
import getAllProducts from "@/handlers/getAllProducts";
import { Router } from "express";

export const productsRoute = Router();

productsRoute.post("/create", createNewProduct);
productsRoute.get("/allproducts", getAllProducts);
