import { Request } from "express";
import type Products from "./database/models/Products";

export type CreateProductBodyType = {
  productName: string;
};
export type CreateRemainderBodyType = {
  productId: number;
  shopId: number;
  remainder: number;
};

export type ProductsControllerType = {
  create: (productName: string) => Promise<Products>;
  createRemainder: (productId: number, shopId: number, remainder: number) => unknown;
};
