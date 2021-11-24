import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employeesRepo: Repository<Employee>,
  ) {}

  findAll() {
    return this.employeesRepo.find();
  }
  finById(id: number) {
    return this.employeesRepo.findOne(id);
  }
  create(body: any) {
    const newEmployee = this.employeesRepo.create(body);
    return this.employeesRepo.save(newEmployee);
  }
  async update(id: number, body: any) {
    const employee = await this.employeesRepo.findOne(id);
    this.employeesRepo.merge(employee, body);
    return this.employeesRepo.save(employee);
  }

  async delete(id: number) {
    await this.employeesRepo.delete(id);
    return true;
  }
}
