import productsController from "@/database/controllers/productsController";
import { CreateProductBodyType } from "@/types";
import { Request, Response } from "express";

export default async function (req: Request<object, object, CreateProductBodyType>,res: Response){
	const {productName} = req.body
	
	if (productName){
		try {
			const dbRes = await productsController().create(productName)
			if(dbRes){
				res.status(200).json({response: 'item created'}).end()
			}
		} catch (error) {
			console.log(error);
			
		}
	}
}