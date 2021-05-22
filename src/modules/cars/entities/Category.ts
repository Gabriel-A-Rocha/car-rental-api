import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity({ name: "categories" })
export class Category {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  readonly name: string;

  @Column()
  readonly description: string;

  @CreateDateColumn()
  readonly created_at?: Date;

  constructor(name: string, description: string) {
    this.id = uuidV4();
    this.name = name;
    this.description = description;
  }
}
