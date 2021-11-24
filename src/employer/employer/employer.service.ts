import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employer } from './employer.entity';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer) private employersRepo: Repository<Employer>,
  ) {}

  findAll() {
    return this.employersRepo.find();
  }
  finById(id: number) {
    return this.employersRepo.findOne(id);
  }
  create(body: any) {
    const newEmployer = this.employersRepo.create(body);
    return this.employersRepo.save(newEmployer);
  }
  async update(id: number, body: any) {
    const employer = await this.employersRepo.findOne(id);
    this.employersRepo.merge(employer, body);
    return this.employersRepo.save(employer);
  }

  async delete(id: number) {
    await this.employersRepo.delete(id);
    return true;
  }
}
