import checkRemainder from "@/handlers/checkRemainders";
import createNewShop from "@/handlers/createNewShop";
import createRemainder from "@/handlers/createRemainder";
import { Router } from "express";

export const shopsRoute = Router();

shopsRoute.post("/create", createNewShop);
shopsRoute.post("/create-remainder", createRemainder);
shopsRoute.get("/product-remainders", checkRemainders);
