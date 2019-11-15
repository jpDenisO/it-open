import { Controller, Get, Param, Post, Put, Body, Delete,  } from '@nestjs/common';
import { CreateTodoDto } from '../dto';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(
    private readonly todosService:TodosService
  ) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    console.log(this.todosService);
    return await this.todosService.findAll();
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
