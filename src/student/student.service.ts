import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './interface/studentInterface';
import { Model } from 'mongoose';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel('student') private studentModel: Model<Student>) {}

  async getStudents(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }

  async createStudent(data: StudentDto): Promise<Student> {
    const student = new this.studentModel(data);
    return await student.save();
  }

  async updateStudent(id: string, data: StudentDto): Promise<string> {
    const update = await this.studentModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .exec();
    if (update) {
      return `Student with ID ${id} has been successfully update.`;
    } else {
      throw new Error(`Student with ID ${id} not found.`);
    }
  }

  async deleteStudent(id: string): Promise<string> {
    const deletedStudent = await this.studentModel.findByIdAndDelete(id).exec();
    if (deletedStudent) {
      return `Student with ID ${id} has been successfully deleted.`;
    } else {
      throw new Error(`Student with ID ${id} not found.`);
    }
  }
}
