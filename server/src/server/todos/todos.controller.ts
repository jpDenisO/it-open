import { Controller, Get, Param, Post, Put, Body, Delete,  } from '@nestjs/common';
import { CreateTodoDto } from './dto';

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
  @Post('create')
  createTodo(@Body() createTodoDto: CreateTodoDto ) {
    console.log(createTodoDto);
    return 'create ToDo';
  }
  @Put('edit/:id')
  editTodo(@Param('id') id:string) {
    return `edit ${id} ToDo`;
  }
  @Delete('delete/:id')
  deleteTodo(@Param('id') id:string) {
    return `deleted ${id} ToDo`
  }
}
