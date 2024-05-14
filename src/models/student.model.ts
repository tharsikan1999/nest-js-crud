import * as mongoose from 'mongoose';

export const StudentModel = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});
