import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from '../dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  find(id: string): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const { name, priority, description, done = false } = createTodoDto;
    const todo = new Todo();

    todo.name = name;
    todo.priority = priority;
    todo.description = description;
    todo.done = done;

    await this.todoRepository.save(todo);

    return todo;
  }

  async update(id: string, updateTodoDto: CreateTodoDto): Promise<Todo> {
    const todo: Todo = await this.todoRepository.findOne(id);

    return await this.todoRepository.save({
      ...todo,
      ...updateTodoDto
    });
  }

  async delete(id: string): Promise<boolean> {
    const todo = await this.todoRepository.findOne(id);
    await this.todoRepository.remove(todo);
    return true;
  }
}
