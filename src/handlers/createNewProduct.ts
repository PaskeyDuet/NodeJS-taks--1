import productsController from "@/database/controllers/productsController";
import type { CreateProductBodyType } from "@/types";
import type { Request, Response } from "express";

export default async function (
  req: Request<object, object, CreateProductBodyType>,
  res: Response
) {
  const { productName } = req.body;

  if (productName) {
    try {
      const dbRes = await productsController().create(productName);
      if (dbRes) {
        res
          .status(200)
          .json({ response: `item ${productName} created` })
          .end();
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json({ response: "Empty productname" });
  }
}
