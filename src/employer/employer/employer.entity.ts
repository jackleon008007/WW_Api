import { Publication } from 'src/jobPublication/publication/publication.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Employer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  age: number;

  @Column()
  companyName: string;
  
  @Column()
  dni: number;
  
  @Column()
  numberPhone: number;

  @OneToMany(() => Publication, (publicationn) => publicationn.employer)
  publications: Publication[];
}
