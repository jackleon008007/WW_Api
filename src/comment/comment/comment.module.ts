import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { Publication } from '../../jobPublication/publication/publication.entity';
import { Employee } from '../../employee/employee/employee.entity';
import { EmployeeService } from '../../employee/employee/employee.service';
import { PublicationService } from '../../jobPublication/publication/publication.service';
import { Employer } from 'src/employer/employer/employer.entity';
import { EmployerService } from 'src/employer/employer/employer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment, Publication, Employee, Employer]),
    Repository,
  ],
  providers: [
    CommentService,
    EmployeeService,
    PublicationService,
    EmployerService,
  ],
  controllers: [CommentController],
  exports: [TypeOrmModule],
})
export class CommentModule {}
