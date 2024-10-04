import { Table, Column, Model, DataType } from "sequelize-typescript";
import type { PartialBy } from "@sequelize/utils";

type ProductAttributes = {
  product_id: number;
  product_name: string;
};

type ProductAttributesCreationAttributes = PartialBy<
ProductAttributes,
  "product_id"
>;

@Table({
  timestamps: true,
  tableName: "products_info",
  modelName: "Products",
})
export default class Products extends Model<ProductAttributes, ProductAttributesCreationAttributes> {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true
  })
  declare product_id: number;

  @Column({
    type: DataType.STRING,
  })
  declare product_name: string;
}
