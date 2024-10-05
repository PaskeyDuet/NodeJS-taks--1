import productsController from "@/database/controllers/productsController";
import type { Request, Response } from "express";

export default async function (req: Request, res: Response) {
  const allProducts = await productsController().getAll();

  if (allProducts) {
    res.json({ allProducts });
  } else {
    res.send("products are empty");
  }
}
