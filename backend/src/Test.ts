import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './models/UserModel';

import dotenv from "dotenv";
dotenv.config();

const createTestAccount = async () => {
  const email = 'admin@example.com';
  const password = 'StrongPassword123!';
  const name = 'Admin User';
  const role = 'admin';
  const profile = {
    phone: '123-456-7890',
    address: '123 Admin St, Admin City, NJ 12345',
    license_number: 'A1234567',
  };

  // Check if the admin account already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    console.log('Admin account already exists.');
    return;
  }

  // Create the admin account
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = new User({ email, password: hash, name, role, profile });
  await user.save();

  console.log('Admin account created:', { email, password, name, role, profile });
};

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('Database connected');
    createTestAccount().then(() => mongoose.disconnect());
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });