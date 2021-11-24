import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';
import { Employer } from './employer.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Employer]), Repository],
  providers: [EmployerService],
  controllers: [EmployerController],
  exports: [TypeOrmModule],
})
export class EmployerModule {}
