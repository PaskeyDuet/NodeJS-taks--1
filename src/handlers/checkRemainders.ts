import productsController from "@/database/controllers/productsController";
import shopController from "@/database/controllers/shopController";
import type { CheckRemainderType } from "@/types";
import type { Request, Response } from "express";

export default async function (
  req: Request<object, object, object, CheckRemainderType>,
  res: Response
) {
  console.log("dsdsdsd");

  const { productId } = req.query;

  if (productId) {
    const remainderNumber = await shopController().checkRemainders(productId);
    if (remainderNumber.length !== 0) {
    }
    res.send(`there is ${remainderNumber} of this product`);
  } else {
    res.send("lack of data in query");
  }
}
