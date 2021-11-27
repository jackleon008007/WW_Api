import { Controller, Get, Param } from '@nestjs/common';
import { PublicationService } from '../publication.service';

@Controller('api/search')
export class SearchController {
  constructor(private publicationService: PublicationService) {}

  @Get('/title/:title')
  getByTitle(@Param('title') title: string) {
    return this.publicationService.findByTitle(title);
  }
  @Get('/name/:name')
  getByName(@Param('name') name: string) {
    return this.publicationService.findByName(name);
  }
}
