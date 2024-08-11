import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema(
  {
    qualityOfLecture: { type: Number, required: true },
    easeOfMeeting: { type: Number, required: true },
    oneOnOneTime: { type: Number, required: true },
    landingAJob: { type: Number, required: true },
    difficultyOfYourStudies: { type: Number, required: true },
    university: { type: mongoose.Schema.Types.ObjectId, ref: "University", required: true },
    degreeYouTook: { type: String, required: true },
    fewWords: { type: String, required: true, minlength: 10, maxlength: 50 },
    user: { type: String, required: true },
  },
  { timestamps: true }
);

const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name of the university"],
    unique: true,
  },
  location: {
    type: String,
    required: [true, "Please provide the location of the university"],
  },
  region: {
    type: String,
    required: [true, "Please provide a region"],
  },
  notes: {
    type: String,
  },
  established: {
    type: Number,
    required: true,
  },
  ratings: [RatingSchema],
});

const University = mongoose.models.University || mongoose.model("University", UniversitySchema);

export default University;
