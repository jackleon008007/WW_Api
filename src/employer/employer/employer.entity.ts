import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ default: false })
  completed: boolean;
}
