import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployerService } from './employer.service';

@Controller('api/employer')
export class EmployerController {
  constructor(private employerService: EmployerService) {}
  @Get()
  getAllEmployee() {
    return this.employerService.findAll();
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.employerService.finById(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.employerService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.employerService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.employerService.delete(id);
  }
}
