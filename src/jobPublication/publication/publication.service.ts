import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publication } from './publication.entity';
import { Employer } from '../../employer/employer/employer.entity';

@Injectable()
export class PublicationService {
  constructor(
    @InjectRepository(Publication)
    private publicationRepo: Repository<Publication>,
    @InjectRepository(Employer)
    private employerRepo: Repository<Employer>,
  ) {}

  findAll() {
    return this.publicationRepo.find();
  }
  finById(id: number) {
    return this.publicationRepo.findOne(id);
  }
  findByTitle(title1: string) {
    return this.publicationRepo.findOne({ where: { title: title1 } });
  }
  findByName(name1: string) {
    return this.publicationRepo.findOne({ where: { name: name1 } });
  }

  async create(body: any) {
    const employer = await this.employerRepo.findOne(body.employerId);
    if (!employer) {
      throw new NotFoundException('employer Not Found');
    }
    const newpublication = new Publication();
    newpublication.name = body.name;
    newpublication.title = body.title;
    newpublication.dateCreated = body.dateCreated;
    newpublication.content = body.content;
    newpublication.description = body.description;
    newpublication.employer = employer;
    return this.publicationRepo.save(newpublication);
  }
  async update(id: number, body: any) {
    const publication = await this.publicationRepo.findOne(id);
    this.publicationRepo.merge(publication, body);
    return this.publicationRepo.save(publication);
  }

  async delete(id: number) {
    await this.publicationRepo.delete(id);
    return true;
  }
}
