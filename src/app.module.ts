import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee/employee/employee.controller';
import { EmployeeService } from './employee/employee/employee.service';
import { EmployerController } from './employer/employer/employer.controller';
import { EmployerService } from './employer/employer/employer.service';
import { EmployeeModule } from './employee/employee/employee.module';
import { EmployerModule } from './employer/employer/employer.module';
import { Repository } from 'typeorm';
import { CommentModule } from './comment/comment/comment.module';
import { PublicationModule } from './jobPublication/publication/publication.module';
import { JobApplicationModule } from './jobApplications/job-application/job-application.module';
import { PublicationService } from './jobPublication/publication/publication.service';
import { CommentService } from './comment/comment/comment.service';
import { PublicationController } from './jobPublication/publication/publication.controller';
import { CommentController } from './comment/comment/comment.controller';
import { JobApplicationController } from './jobApplications/job-application/job-application.controller';
import { JobApplicationService } from './jobApplications/job-application/job-application.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Lp3y9E6X',
      database: 'ww_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10,
    }),
    EmployeeModule,
    EmployerModule,
    CommentModule,
    Repository,
    PublicationModule,
    JobApplicationModule,
  ],
  controllers: [
    EmployeeController,
    EmployerController,
    PublicationController,
    CommentController,
    JobApplicationController,
  ],
  providers: [
    EmployerService,
    EmployeeService,
    CommentService,
    PublicationService,
    JobApplicationService,
  ],
})
export class AppModule {}
