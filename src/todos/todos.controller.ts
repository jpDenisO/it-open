import { Controller, Get, Param, Post, Put, Header } from '@nestjs/common';
import { Request } from 'types/express';

@Controller('todos')
export class TodosController {

  @Get()
  getTodos() {
    return 'all todos'
  }
  @Get(':id')
  getTodo(@Param('id') id:string){
    return `todo id: ${id}`;
  }
}
