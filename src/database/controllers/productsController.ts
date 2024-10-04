import type { ProductsControllerType } from "@/types";
import { where } from "@sequelize/core";
import Products from "../models/Products";
import ShopPositions from "../models/ShopPositions";

export default (): ProductsControllerType => {
  return {
    create: async (productName: string) =>
      Products.create({
        product_name: productName,
      }),
    createRemainder: async (productId: number, shopId: number, remainder: number) => {
      const shopPosition = await ShopPositions.findOne({
        where: {
          shop_id: shopId,
          product_id: productId,
        },
      });
      if (shopPosition) {
        return await ShopPositions.create({
          shop_id: shopId,
          product_id: productId,
          quantity: remainder,
        });
      } else {
        return await ShopPositions.update(
          { quantity: remainder },
          {
            where: {
              shop_id: shopId,
              product_id: productId,
            },
          },
        );
      }
    },
  };
};
