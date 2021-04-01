import { v4 as uuidV4 } from "uuid";

class Category {
  readonly id: string;
  name: string;
  description: string;
  readonly created_at: Date;

  constructor(name: string, description: string) {
    this.id = uuidV4();
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}

export { Category };
