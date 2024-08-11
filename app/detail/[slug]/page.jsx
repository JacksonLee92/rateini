import { Button, Card, Group, Rating, Stack, Text, Title } from "@mantine/core";
import { ThumbsDown, ThumbsUp } from "lucide";
import Link from "next/link";

export default async function UniversityPage() {
  const university = {
    name: "Admas University",
    location: "Addis Ababa",
    region: "Addis Ababa",
    established: 1993,
    notes:
      "Science And Technology. Formerly called, Adama University, Nazret College of Technical Teachers Education preceding Nazret Technical College.",
    ratings: [
      {
        qualityOfLecture: 4,
        easeOfMeeting: 5,
        oneOnOneTime: 3,
        landingAJob: 4,
        difficultyOfYourStudies: 2,
        degreeYouTook: "Computer Science",
        fewWords: "Great university with excellent facilities.",
        user: "user1",
      },
      {
        qualityOfLecture: 3,
        easeOfMeeting: 4,
        oneOnOneTime: 2,
        landingAJob: 3,
        difficultyOfYourStudies: 3,
        degreeYouTook: "Mechanical Engineering",
        fewWords: "Good university but can be improved.",
        user: "user2",
      },
    ],
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="bg-slate-200 w-full h-56 flex items-center justify-center text-3xl rounded-md flex-col">
        <h1 className="font-bold text-4xl font-sans">{university.name}</h1>
        <p className="font-semibold italic">Reviews</p>
      </div>
      <div className="mt-5 ">
        <h1 className="text-3xl font-semibold mb-4">{university.name} Average Score</h1>
        <Rating readOnly defaultValue={1} size={"xl"} mb={"lg"} />
        <div className="">
          <h2 className="font-semibold text-2xl">{university.name} Score Details</h2>
          <ul className="gap-4 flex flex-col my-4">
            <li className=" flex gap-4 items-center justify-start">
              Course Difficulty:{" "}
              <Rating defaultValue={university.ratings[0].difficultyOfYourStudies} />{" "}
            </li>
            <li className=" flex gap-4 items-center justify-start">
              Meeting People : <Rating defaultValue={university.ratings[0].easeOfMeeting} />
            </li>
            <li className=" flex gap-4 items-center justify-start">
              Job Chances : <Rating defaultValue={university.ratings[0].landingAJob} />
            </li>
            <li className=" flex gap-4 items-center justify-start">
              Lecture Quality : <Rating defaultValue={university.ratings[0].qualityOfLecture} />
            </li>
            <li className=" flex gap-4 items-center justify-start">
              One On One Time : <Rating defaultValue={university.ratings[0].oneOnOneTime} />
            </li>
          </ul>
          <Button variant="light" fullWidth component={Link} href="/add">
            Add Review
          </Button>
        </div>
        <div className="">
          <Title order={2} className="text-2xl " my="md">
             Student Review({university.ratings.length})
          </Title>
          {university.ratings.map((rating, index) => (
            <div key={index} className="mb-4 bg-gray-400 p-4 rounded-md ">
              <Group position="apart">
                <Text>{rating.degreeYouTook} Student</Text>
              </Group>
              <Group direction="row" spacing="xs">
                <Group position="apart">
                  <Text>Quality of Lecture:</Text>
                  <Rating value={rating.qualityOfLecture} readOnly />
                </Group>
                <Group position="apart">
                  <Text>Ease of Meeting:</Text>
                  <Rating value={rating.easeOfMeeting} readOnly />
                </Group>
                <Group position="apart">
                  <Text>One-on-One Time:</Text>
                  <Rating value={rating.oneOnOneTime} readOnly />
                </Group>
                <Group position="apart">
                  <Text>Landing a Job:</Text>
                  <Rating value={rating.landingAJob} readOnly />
                </Group>
                <Group position="apart">
                  <Text>Difficulty of Studies:</Text>
                  <Rating value={rating.difficultyOfYourStudies} readOnly />
                </Group>
                <div>
                  <Text className="mt-2">Notes From Other Students</Text>
                  <Text className="">{rating.fewWords}</Text>
                </div>
              </Group>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
