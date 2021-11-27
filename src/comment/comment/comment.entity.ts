import { Employee } from 'src/employee/employee/employee.entity';
import { Publication } from 'src/jobPublication/publication/publication.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp')
  dateCreated: Date;

  @Column()
  content: string;
  
  @ManyToOne(() => Publication, (publicationn) => publicationn.comments)
  @JoinColumn({ name: 'publication_id' })
  publication: Publication;

  @ManyToOne(() => Employee, (employeee) => employeee.comments)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;
}
