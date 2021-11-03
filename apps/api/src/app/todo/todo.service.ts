import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ) {}

  createTask(task) {
    return this.todoRepository.save(task);
  }

  getTask() {
    return this.todoRepository.find();
  }

  updateTask(id, task) {
    return this.todoRepository.update(id, task);
  }

  deleteTask(id) {
    return this.todoRepository.delete(id);
  }
}
