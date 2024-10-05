import productsController from "@/database/controllers/productsController";
import shopController from "@/database/controllers/shopController";
import type { CreateShopType } from "@/types";
import type { Request, Response } from "express";

export default async function (req: Request<object, object, CreateShopType>, res: Response) {
  const { shopName } = req.body;

  if (shopName) {
    const data = await shopController().createShop(shopName);

    res.send(data);
  }
}
