import mongoose from 'mongoose';

// Create User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, index: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

// Create modal base on it
const User = mongoose.model('User', userSchema);

export default User;
