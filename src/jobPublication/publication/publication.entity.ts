import { Employer } from 'src/employer/employer/employer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JobApplication } from '../../jobApplications/job-application/job-application.entity';
import { Comment } from '../../comment/comment/comment.entity';

@Entity()
export class Publication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  heading: string;
  
  @Column()
  place: string;

  @Column()
  title: string;

  @Column('timestamp')
  dateCreated: Date;

  @Column()
  content: string;

  @Column()
  description: string;

  @OneToMany(
    () => JobApplication,
    (jobApplication) => jobApplication.publication
  )
  jobApplications: JobApplication[];

  @ManyToOne(() => Employer, (employerr) => employerr.publications)
  @JoinColumn({ name: 'employer_id' })
  employer: Employer;

  @OneToMany(() => Comment, (commentt) => commentt.publication)
  comments: Comment[];
}
