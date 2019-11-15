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
    return await this.todosService.findAll();
  }

  @Get(':id')
  async getTodo(@Param('id') id: string): Promise<Todo> {
    return await this.todosService.find(id);
  }
  @Post('create')
  async createTodo(@Body() createTodoDto: CreateTodoDto ): Promise<Todo> {
    return await this.todosService.create(createTodoDto);
  }
  @Put('edit/:id')
  async editTodo(@Param('id') id:string, @Body() updateTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.todosService.update(id, updateTodoDto);
  }

  @Delete('delete/:id')
  async deleteTodo(@Param('id') id:string): Promise<boolean> {
    await this.todosService.delete(id);
    return;
  }
}
