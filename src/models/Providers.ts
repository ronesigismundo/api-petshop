import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("providers")
class Providers {
  @PrimaryColumn()
  id: string;

  @Column()
  company: string;

  @Column()
  email: string;

  @Column()
  category: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}


export { Providers }