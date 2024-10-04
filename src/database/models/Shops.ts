import { Table, Column, Model, DataType } from "sequelize-typescript";
import type { PartialBy } from "@sequelize/utils";

type ShopAttributes = {
  shop_id: number;
  shop_name: string;
};
type ShopPositionsCreationAttributes = PartialBy<ShopAttributes, "shop_id">;

@Table({
  timestamps: true,
  tableName: "shops_info",
  modelName: "Shops",
})
export default class Shops extends Model<
  ShopAttributes,
  ShopPositionsCreationAttributes
> {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true
  })
  declare shop_id: number;

  @Column({
    type: DataType.STRING,
  })
  declare shop_name: string;
}
