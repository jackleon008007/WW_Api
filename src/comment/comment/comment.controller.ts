import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('api/comment')
export class CommentController {
  constructor(private commmentService: CommentService) {}
  @Get()
  getAllComment() {
    return this.commmentService.findAll();
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.commmentService.finById(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.commmentService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.commmentService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.commmentService.delete(id);
  }
}
