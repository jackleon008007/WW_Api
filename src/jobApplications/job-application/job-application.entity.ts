import { Employee } from 'src/employee/employee/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Publication } from '../../jobPublication/publication/publication.entity';

@Entity()
export class JobApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp')
  dateCreated: Date;

  @Column()
  content: string;

  @Column()
  acceptedLikeACandidate: boolean;

  @Column()
  accepted: boolean;

  @ManyToOne(() => Publication, (publicationn) => publicationn.jobApplications)
  @JoinColumn({ name: 'publication_id' })
  publication: Publication;

  
  @ManyToOne(() => Employee, (employeee) => employeee.jobApplications)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;
}
