import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: {
    type: 'string',
    required: [true, 'Email is required'],
    unique: true,
    validate: [isEmail, `Email is Invalid!!!`],
  },
  password: {
    type: 'string',
    required: [true, 'Password is required'],
    minlength: [
      8,
      'Entered Password is shorter than the minimum allowed length (8).',
    ],
  },
  phone_number: {
    type: Number,
    required: true,
    min: [1000000000, 'Mobile number must be of 10 digits'],
    max: [9999999999, 'Mobile number must be of 10 digits'],
  },
  otp: {
    type: String,
    min: 1000,
    max: 9999,
  },
});

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = mongoose.model('user', userSchema);
