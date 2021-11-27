import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { Employee } from '../../employee/employee/employee.entity';
import { Publication } from '../../jobPublication/publication/publication.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentRepo: Repository<Comment>,
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
    @InjectRepository(Publication) private publicationRepo: Repository<Publication>,
  ) {}

  findAll() {
    return this.commentRepo.find();
  }
  finById(id: number) {
    return this.commentRepo.findOne(id);
  }

  async create(body: any) {
    const publication = await this.publicationRepo.findOne(body.publicationId);
    const employee = await this.employeeRepo.findOne(body.employeeId);
    if (!publication || !employee) {
      throw new NotFoundException('publication or employe Not Found');
    }
    const newComment = new Comment();
    newComment.publication = publication;
    newComment.employee = employee;
    newComment.dateCreated = body.dateCreated;
    newComment.content = body.content;
    return this.commentRepo.save(newComment);
  }

  async update(id: number, body: any) {
    const comment = await this.commentRepo.findOne(id);
    this.commentRepo.merge(comment, body);
    return this.commentRepo.save(comment);
  }

  async delete(id: number) {
    await this.commentRepo.delete(id);
    return true;
  }
}
