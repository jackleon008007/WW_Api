import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobApplication } from './job-application.entity';
import { Publication } from '../../jobPublication/publication/publication.entity';
import { Employee } from '../../employee/employee/employee.entity';

@Injectable()
export class JobApplicationService {
  constructor(
    @InjectRepository(JobApplication)
    private jobapplicationRepo: Repository<JobApplication>,
    @InjectRepository(Publication)
    private publicationRepo: Repository<Publication>,
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  findAll() {
    return this.jobapplicationRepo.find();
  }
  finById(id: number) {
    return this.jobapplicationRepo.findOne(id);
  }
  async create(body: any) {
    const publication = await this.publicationRepo.findOne(body.publicationId);
    const employee = await this.employeeRepo.findOne(body.employeeId);
    if (!publication || !employee) {
      throw new NotFoundException('publication or employe Not Found');
    }
    const newjobApplication = new JobApplication();
    newjobApplication.publication = publication;
    newjobApplication.employee = employee;
    newjobApplication.dateCreated = body.dateCreated;
    newjobApplication.content = body.content;
    newjobApplication.accepted = body.accepted;
    newjobApplication.acceptedLikeACandidate = body.acceptedLikeACandidate;
    return this.jobapplicationRepo.save(newjobApplication);
  }

  async update(id: number, body: any) {
    const jobApplication = await this.jobapplicationRepo.findOne(id);
    this.jobapplicationRepo.merge(jobApplication, body);
    return this.jobapplicationRepo.save(jobApplication);
  }

  async delete(id: number) {
    await this.jobapplicationRepo.delete(id);
    return true;
  }
}
