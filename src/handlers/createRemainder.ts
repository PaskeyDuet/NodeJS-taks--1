import productsController from "@/database/controllers/productsController";
import type { CreateRemainderBodyType } from "@/types";
import type { Request, Response } from "express";

export default async function (req: Request<object, object, CreateRemainderBodyType>, res: Response) {
  const { productId, shopId, remainder } = req.body;

  if (productId && remainder) {
    const data = await productsController().createRemainder(productId, shopId, remainder);
    console.log(data);

    res.send(data);
  }
}
