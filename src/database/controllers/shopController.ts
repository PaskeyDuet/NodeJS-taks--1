import checkRemainder from "@/handlers/checkRemainders";
import ShopPositions from "../models/ShopPositions";
import Shops from "../models/Shops";

export default () => {
  return {
    createRemainder: async (
      productId: number,
      shopId: number,
      remainder: number
    ) => {
      const shopPosition = await ShopPositions.findOne({
        where: {
          shop_id: shopId,
          product_id: productId,
        },
      });

      if (shopPosition) {
        return await ShopPositions.update(
          { quantity: remainder },
          {
            where: {
              shop_id: shopId,
              product_id: productId,
            },
          }
        );
      } else {
        try {
          return await ShopPositions.create({
            shop_id: shopId,
            product_id: productId,
            quantity: remainder,
          });
        } catch (error) {
          let errMessage =
            error instanceof Error ? error.message : "uknown error";
          if (errMessage.match(/foreign key constraint/)) {
            errMessage = "Wrong keys";
          }
          return errMessage;
        }
      }
    },
    createShop: async (shopName: string) => {
      return Shops.create({ shop_name: shopName });
    },
    checkRemainders: async (productId: number) => {
      const findRes = await ShopPositions.findAll({
        where: {
          product_id: productId,
        },
      });
      return findRes;
    },
  };
};
