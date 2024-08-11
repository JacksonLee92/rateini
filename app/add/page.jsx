"use client";
import { Autocomplete, Button, Rating, Textarea } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { universitiesList, universityCourses, universityNames } from "../../lib/data/data";
import Link from "next/link";
import toast from "react-hot-toast";

const reviewSchema = z.object({
  qualityOfLecture: z.number().min(1, "Quality of lecture materials is required"),
  easeOfMeeting: z.number().min(1, "Ease of meeting new people is required"),
  oneOnOneTime: z.number().min(1, "One on one time with tutors/lecturers is required"),
  landingAJob: z.number().min(1, "Landing a job related to your studies is required"),
  difficultyOfYourStudies: z.number().min(1, "Difficulty of your studies is required"),
  nameOfUniversity: z.string(),
  degreeYouTook: z.string().nonempty("Degree You Took is required"),
  fewWords: z
    .string()
    .min(10, "A few words for other students must be at least 10 characters")
    .max(50, "A few words for other students must be at most 50 characters"),
});

const AddPage = () => {
  const [qualityOfLecture, setQualityOfLecture] = useState(0);
  const [easeOfMeeting, setEaseOfMeeting] = useState(0);
  const [oneOnOneTime, setOneOnOneTime] = useState(0);
  const [landingAJob, setLandingAJob] = useState(0);
  const [difficultyOfYourStudies, setDifficultyOfYourStudies] = useState(0);
  const [university, setUniversity] = useState("");
  const [degreeYouTook, setDegreeYouTook] = useState("");
  const [fewWords, setFewWords] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const [universities, setUniversities] = useState([]);
  const [nameOfUniversity, setNameOfUniversity] = useState();
  const [listOfCourses, setListOfCourses] = useState([]);
  const [listOfUniversities, setListOfUniversities] = useState([]);

  useEffect(() => {
    for(const props of universitiesList){
      setListOfUniversities((names) => [...names, props.name]);
    }
  }, []);

  useEffect(() => {
    const fetchUniversities = async () => {
      const res = await fetch("/api/universities");
      const data = await res.json();
      setUniversities(data.map((u) => ({ value: u._id, label: u.name })));
    };
    fetchUniversities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      qualityOfLecture,
      easeOfMeeting,
      oneOnOneTime,
      landingAJob,
      difficultyOfYourStudies,
      nameOfUniversity,
      degreeYouTook,
      fewWords,
      user,
    };

    try {
      reviewSchema.parse(formData);
      const res = await fetch(`/api/university`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        toast.error("Failed to submit review");
        throw new Error("Failed to submit review");
      }

      const data = await res;
      console.log("Form data is valid and saved:", data);
      toast.success("Form data is valid and saved");
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Validation errors:", error.errors);
        setError(error.errors);
      } else {
        console.error("Unknown error:", error);
        setError([{ message: error.message }]);
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="font-semibold text-3xl capitalize underline mb-6">Write a review</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between gap-36 pb-12">
          <div>
            <h2 className="text-xl">Quality of lecture materials</h2>
            <Rating size="lg" value={qualityOfLecture} onChange={setQualityOfLecture} />
          </div>
          <div>
            <h2 className="text-xl">Ease of meeting new people</h2>
            <Rating size="lg" value={easeOfMeeting} onChange={setEaseOfMeeting} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-36 pb-6">
          <div>
            <h2 className="text-xl">One on one time with tutors/lecturers</h2>
            <Rating size="lg" value={oneOnOneTime} onChange={setOneOnOneTime} />
          </div>
          <div>
            <h2 className="text-xl">Landing a job related to your studies</h2>
            <Rating size="lg" value={landingAJob} onChange={setLandingAJob} />
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-xl">Difficulty of your studies</h2>

          <Rating
            size="lg"
            value={difficultyOfYourStudies}
            onChange={setDifficultyOfYourStudies}
            required
          />
        </div>
        <div className="flex items-center justify-between w-full gap-12 mb-12">
          <Autocomplete
            label="Name of University"
            required
            description="make sure you choose the correct one "
            placeholder="Pick a university"
            data={universityNames}
            value={nameOfUniversity}
            onChange={setNameOfUniversity}
            className="w-full"
          />
          <Autocomplete
            label="Degree You Took"
            description="(choose the closest or write in the notes what it was)"
            placeholder="Select A Degree"
            required
            data={universityCourses}
            value={degreeYouTook}
            onChange={setDegreeYouTook}
            className="w-full"
          />
        </div>
        <div>
          <Textarea
            label="A few words for other students"
            withAsterisk
            description="50 Words"
            placeholder="Input placeholder"
            value={fewWords}
            required
            onChange={(e) => setFewWords(e.target.value)}
          />
        </div>
        <div className="w-full mt-6 flex items-center justify-between">
          <Button variant="outline" component={Link} href="/">
            Back
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </main>
  );
};

export default AddPage;
