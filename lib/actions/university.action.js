
import University from "../models/university.model";
import { connectToDB } from "../mongoose";

export  default async function addReview({data}) {
  await connectToDB()

  const { id } = data;


    const { qualityOfLecture, easeOfMeeting, oneOnOneTime, landingAJob, difficultyOfYourStudies, degreeYouTook, fewWords, user } = data;

    try {
      const university = await University.findById(id);
      if (!university) {
        return res.status(404).json({ success: false, error: 'University not found' });
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
}


export async function newUniversity (){
  connectToDB()
  const uniData = {
    name: "Adama University",
    location: "Adama",
    region: "Oromia",
    established: 1993,
    notes:
      "Science And Technology. Formerly called, Adama University, Nazret College of Technical Teachers Education preceding Nazret Technical College.",
  }

  const newUniversity  = new University(uniData)
  const createUniversity = await newUniversity.save()
  console.log(createUniversity)
}