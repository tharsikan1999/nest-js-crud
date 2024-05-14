import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModel } from '../models/student.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'student', schema: StudentModel }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
