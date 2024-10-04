import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import type { PartialBy } from "@sequelize/utils";
import Products from "./Products";

type OrderAttributes = {
  order_id: number;
  product_id: number;
  quantity: number;
};
type OrderCreationAttributes = PartialBy<OrderAttributes, "order_id">;

@Table({
  timestamps: true,
  tableName: "order_details",
  modelName: "Orders",
})
export default class Orders extends Model<
  OrderAttributes,
  OrderCreationAttributes
> {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true
  })
  declare order_id: number;

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
