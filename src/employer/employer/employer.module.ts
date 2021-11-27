import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';
import { Employer } from './employer.entity';
import { Repository } from 'typeorm';
import { Publication } from 'src/jobPublication/publication/publication.entity';
import { PublicationService } from '../../jobPublication/publication/publication.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employer, Publication]), Repository],
  providers: [EmployerService, PublicationService],
  controllers: [EmployerController],
  exports: [TypeOrmModule],
})
export class EmployerModule {}
