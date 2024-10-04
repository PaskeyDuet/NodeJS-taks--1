import { Sequelize } from "sequelize-typescript";
import ShopPositions from "./models/ShopPositions";
import Orders from "./models/Orders";
import Shops from "./models/Shops";
import Products from "./models/Products";

const env = process.env;
const dbObj = {
  database: env.DB_NAME,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  port: 5432,
};

export const sequelize = new Sequelize({
  dialect: "postgres",
  logging: false,
  ...dbObj,
});

sequelize.addModels([Products, Shops, Orders, ShopPositions ]);

Products.hasMany(Orders, { foreignKey: "product_id" });
Products.hasMany(ShopPositions, { foreignKey: "product_id" });
Shops.hasMany(ShopPositions, {foreignKey: 'shop_id'})
