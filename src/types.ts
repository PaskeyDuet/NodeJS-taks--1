import { Request } from "express";
import type Products from "./database/models/Products";
import type ShopPositions from "./database/models/ShopPositions";
import type Shops from "./database/models/Shops";

export type CreateProductBodyType = {
  productName: string;
};
export type CreateRemainderBodyType = {
  productId: number;
  shopId: number;
  remainder: number;
};
export type CreateShopType = {
  shopName: string;
};
export type CheckRemainderType = {
  productId: number;
};

export type ProductsControllerType = {
  create: (productName: string) => Promise<Products>;
  getAll: () => Promise<Products[]>;
};

export type ShopControllerType = {
  createRemainder: (
    productId: number,
    shopId: number,
    remainder: number
  ) => unknown;
  createShop: (productName: string) => Promise<Shops>;
  checkRemainders: (
    shopId: number,
    productId: number
  ) => Promise<ShopPositions[]>;
};
