import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PublicationController } from './publication.controller';
import { Publication } from './publication.entity';
import { PublicationService } from './publication.service';
import { JobApplication } from '../../jobApplications/job-application/job-application.entity';
import { JobApplicationService } from '../../jobApplications/job-application/job-application.service';
import { CommentService } from '../../comment/comment/comment.service';
import { Comment } from '../../comment/comment/comment.entity';
import { Employer } from '../../employer/employer/employer.entity';
import { EmployerService } from 'src/employer/employer/employer.service';
import { Employee } from '../../employee/employee/employee.entity';
import { SearchController } from './search/search.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Publication,
      JobApplication,
      Comment,
      Employer,
      Employee,
    ]),
    Repository,
  ],
  providers: [
    PublicationService,
    JobApplicationService,
    CommentService,
    EmployerService,
    Employee,
  ],
  controllers: [PublicationController, SearchController],
  exports: [TypeOrmModule],
})
export class PublicationModule {}
