import University from "@/lib/models/university.model";
import { connectToDB } from "@/lib/mongoose";

export async function GET(req , res){
  await connectToDB();

  const { id } = req.query;

  if (req.method === "POST") {
    const {
      qualityOfLecture,
      easeOfMeeting,
      oneOnOneTime,
      landingAJob,
      difficultyOfYourStudies,
      degreeYouTook,
      fewWords,
      user,
    } = req.body;

    try {
      const university = await University.findById(id);
      if (!university) {
        return res.status(404).json({ success: false, error: "University not found" });
      }

      const newRating = {
        qualityOfLecture,
        easeOfMeeting,
        oneOnOneTime,
        landingAJob,
        difficultyOfYourStudies,
        degreeYouTook,
        fewWords,
        user,
      };

      university.ratings.push(newRating);
      await university.save();

      res.status(201).json({ success: true, data: university });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}