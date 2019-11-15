import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './todos/todos.controller';
import { Todo } from './todos/todo.entity';
import { TodosService } from './todos/todos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'it-open',
      username: 'dbuser',
      password: '1234',
      entities: [Todo],
      synchronize: true
    }),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class AppModule {}
