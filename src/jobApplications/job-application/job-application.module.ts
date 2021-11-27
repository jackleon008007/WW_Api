import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publication } from 'src/jobPublication/publication/publication.entity';
import { Repository } from 'typeorm';
import { JobApplicationController } from './job-application.controller';
import { JobApplication } from './job-application.entity';
import { JobApplicationService } from './job-application.service';
import { Employee } from '../../employee/employee/employee.entity';
import { PublicationService } from '../../jobPublication/publication/publication.service';
import { EmployeeService } from '../../employee/employee/employee.service';
import { Employer } from '../../employer/employer/employer.entity';
import { EmployerService } from '../../employer/employer/employer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobApplication, Publication, Employee, Employer]),
    Repository,
  ],
  providers: [
    JobApplicationService,
    PublicationService,
    EmployeeService,
    EmployerService,
  ],
  controllers: [JobApplicationController],
  exports: [TypeOrmModule],
})
export class JobApplicationModule {}
