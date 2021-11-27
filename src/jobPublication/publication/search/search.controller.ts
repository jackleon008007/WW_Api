import { Controller, Get, Param } from '@nestjs/common';
import { PublicationService } from '../publication.service';

@Controller('api/publication/search')
export class SearchController {
  constructor(private publicationService: PublicationService) {}

  @Get('/heading/:heading')
  getByTitle(@Param('heading') heading: string) {
    return this.publicationService.findByHeading(heading);
  }
  @Get('/place/:place')
  getByName(@Param('place') place: string) {
    return this.publicationService.findByPlace(place);
  }
}
