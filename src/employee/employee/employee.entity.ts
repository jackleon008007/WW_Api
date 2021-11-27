import { JobApplication } from 'src/jobApplications/job-application/job-application.entity';
import { Comment } from '../../comment/comment/comment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  
  @Column()
  age: number;

  @Column()
  dni: number;

  
  @Column()
  numberPhone: number;
  @OneToMany(
    () => JobApplication,
    (jobApplication) => jobApplication.publication
  )
  jobApplications: JobApplication[];

  @OneToMany(() => Comment, (commentt) => commentt.employee)
  comments: Comment[];

}
