import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee } from './employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), Repository],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports: [TypeOrmModule],
})
export class EmployeeModule {}
