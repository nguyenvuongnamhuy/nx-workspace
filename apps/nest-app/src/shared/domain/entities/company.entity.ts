import { Entity } from './entity.interface';

export class Company implements Entity {
  id: number;
  name: string;
  address: string;
  // createdAt: Date;
  // updatedAt: Date;

  constructor(init?: Partial<Company>) {
    Object.assign(this, init);
  }

  equals(entity: Entity): boolean {
    if (entity instanceof Company) return this.id === entity.id;
    return false;
  }
}
