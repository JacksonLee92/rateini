// models/University.js
import mongoose from 'mongoose';

const RatingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the name of the university'],
    unique: true,
  },
  location: {
    type: String,
    required: [true, 'Please provide the location of the university'],
  },
  description: {
    type: String,
  },
  ratings: [RatingSchema],
});

export default mongoose.models.University || mongoose.model('University', UniversitySchema);
