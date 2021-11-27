import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PublicationService } from './publication.service';

@Controller('api/publication')
export class PublicationController {
  constructor(private publicationService: PublicationService) {}
  @Get()
  getAllPublication() {
    return this.publicationService.findAll();
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.publicationService.finById(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.publicationService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.publicationService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.publicationService.delete(id);
  }
}
