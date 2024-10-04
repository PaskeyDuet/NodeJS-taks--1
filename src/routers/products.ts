import createNewProduct from "@/handlers/createNewProduct";
import createRemainder from "@/handlers/createRemainder";
import { Router } from "express";

export const productsRoute = Router()

productsRoute.post('/create', createNewProduct)
productsRoute.put('/create-remainder', createRemainder)