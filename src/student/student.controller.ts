import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
import { Student } from './interface/studentInterface';

@Controller('student')
export class StudentController {
  constructor(private readonly student: StudentService) {}
  @Get()
  async getStudents(): Promise<Student[]> {
    return await this.student.getStudents();
  }

  @Put(':id')
  async updateStudent(
    @Param('id') id: string,
    @Body() data: StudentDto,
  ): Promise<string> {
    return await this.student.updateStudent(id, data);
  }

  @Post()
  async postStudent(@Body() data: StudentDto): Promise<Student> {
    return await this.student.createStudent(data);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string): Promise<string> {
    return await this.student.deleteStudent(id);
  }
}
