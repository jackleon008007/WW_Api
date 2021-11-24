import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('api/employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}
  @Get()
  getAllEmployee() {
    return this.employeeService.findAll();
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.employeeService.finById(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.employeeService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.employeeService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.employeeService.delete(id);
  }
}
