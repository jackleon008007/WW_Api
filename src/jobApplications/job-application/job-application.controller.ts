import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobApplicationService } from './job-application.service';

@Controller('api/job-application')
export class JobApplicationController {
  constructor(private jobapplicationService: JobApplicationService) {}
  @Get()
  getAllJobApplication() {
    return this.jobapplicationService.findAll();
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.jobapplicationService.finById(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.jobapplicationService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.jobapplicationService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.jobapplicationService.delete(id);
  }
}
