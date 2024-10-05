import type { PartialBy } from "@sequelize/utils";
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Products from "./Products";

type ShopPositionsAttributes = {
  position_id: number;
  shop_id: number;
  product_id: number;
  quantity: number;
};
type ShopPositionsCreationAttributes = PartialBy<
  ShopPositionsAttributes,
  "position_id"
>;

@Table({
  timestamps: true,
  tableName: "shop_positions",
  modelName: "ShopPositions",
})
export default class ShopPositions extends Model<
  ShopPositionsAttributes,
  ShopPositionsCreationAttributes
> {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  declare position_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare shop_id: number;

  @ForeignKey(() => Products)
  @Column({
    type: DataType.INTEGER,
  })
  declare product_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare quantity: number;
}
