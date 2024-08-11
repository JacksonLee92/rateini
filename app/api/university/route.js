import University from "../../../lib/models/university.model";

export async function GET(req) {
  try {
    const university = University.find({});
    return new Response(JSON.stringify(university));
  } catch (error) {
    return new Response("Something Went Wrong", { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDB()
    const uniData = {
      name: "Adama University",
      location: "Adama",
      region: "Oromia",
      established: 1993,
      notes:
        "Science And Technology. Formerly called, Adama University, Nazret College of Technical Teachers Education preceding Nazret Technical College.",
    }

    const newUniversity = new University(uniData)
    const createUniversity = await newUniversity.save()
    console.log(createUniversity)

    return new Response(JSON.stringify(createUniversity), { status: 201 })
  } catch (error) {
    console.error(error)
    return new Response("Something Went Wrong", { status: 500 })
  }
}