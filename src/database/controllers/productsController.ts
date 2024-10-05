import type { ProductsControllerType } from "@/types";
import { where } from "@sequelize/core";
import { attribute } from "@sequelize/core/_non-semver-use-at-your-own-risk_/expression-builders/attribute.js";
import Products from "../models/Products";
import ShopPositions from "../models/ShopPositions";
import Shops from "../models/Shops";

export default (): ProductsControllerType => {
  return {
    create: async (productName: string) =>
      Products.create({
        product_name: productName,
      }),
    getAll: () =>
      Products.findAll({ attributes: ["product_name", "product_id"] }),
  };
};
