import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee/employee/employee.controller';
import { EmployeeService } from './employee/employee/employee.service';
import { EmployerController } from './employer/employer/employer.controller';
import { EmployerService } from './employer/employer/employer.service';
import { EmployeeModule } from './employee/employee/employee.module';
import { EmployerModule } from './employer/employer/employer.module';
import { Repository } from 'typeorm';

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
    Repository,
  ],
  controllers: [EmployeeController, EmployerController],
  providers: [EmployerService, EmployeeService],
})
export class AppModule {}
