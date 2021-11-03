import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTask(@Body() body: { task: string }) {
    return this.todoService.createTask(body);
  }

  @Get()
  getTask() {
    return this.todoService.getTask();
  }

  @Put(':id')
  updateTask(@Param() id: number, @Body() body: { task: string }) {
    return this.todoService.updateTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param() id: number) {
    return this.todoService.deleteTask(id);
  }
}
