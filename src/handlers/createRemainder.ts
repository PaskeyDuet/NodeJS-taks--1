import productsController from "@/database/controllers/productsController";
import shopController from "@/database/controllers/shopController";
import type { CreateRemainderBodyType } from "@/types";
import type { Request, Response } from "express";

export default async function (
  req: Request<object, object, CreateRemainderBodyType>,
  res: Response
) {
  const { productId, shopId, remainder } = req.body;

  if (productId && remainder) {
    const data = await shopController().createRemainder(
      productId,
      shopId,
      remainder
    );

    res.send(data);
  }
}
